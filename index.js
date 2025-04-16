const models = require("./models");
const macro = require("./modules/macro");
const moment = require("moment");
const consola = require("consola");
const schedule = require("node-schedule");

const DEV_ENV = {
    siteUid: 8118,
    carNumber: `266가2484`.trim(),
    discountTicketUid: 331,
    dtuAuto: false,
};

if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === undefined
) {
    const parkingData = require("./modules/macro/dataController");

    const { siteUid, dtuAuto, discountTicketUid: dtuId } = DEV_ENV;
    const { macroButtonMap } = parkingData[siteUid];

    if (dtuAuto) {
        DEV_ENV.discountTicketUid = Object.keys(macroButtonMap)[0];
    } else if (macroButtonMap && macroButtonMap[dtuId] === undefined) {
        console.log(
            "\n*** Please enter the correct discountTicketUid number.***\n",
            macroButtonMap
        );
    }

    consola.info("#####Start development Macro");
    macro.start(DEV_ENV);
} else if (process.env.NODE_ENV === "production") {
    let scheduleFlag = false
    
    schedule.scheduleJob("*/5 * * * * ", async function () {
        if(!scheduleFlag){
            scheduleFlag = true
            await macroJob()
            scheduleFlag = false
        }
    });

    async function macroJob() {
        consola.info(
            "##############Start parking ticket scheduler#############"
        );

        let macroTargets = await models.carmeleon.payLog.findAll({
            where: {
                status: 10,
                cancelStatus: [-1, -10],
                activeStatus: false,
                expired: false,
            },
            include: [
                {
                    model: models.carmeleon.discountTicket,
                },
            ],
        });

        consola.info("Targets : ", macroTargets.length);

        for (let macroTarget of macroTargets) {
            consola.info("Target payLogUid : ", macroTarget.uid);
            let startTime = macroTarget.discountTicket.parkingStartTime;
            let startHour = macroTarget.discountTicket.parkingStartTimeHour;
            let startMinute = macroTarget.discountTicket.parkingStartTimeMinute;
            let endTime = macroTarget.discountTicket.parkingEndTime;
            let endHour = macroTarget.discountTicket.parkingEndTimeHour;
            let endMinute = macroTarget.discountTicket.parkingEndTimeMinute;

            let parkingStartTime = startTime ? parseInt(startTime) : null;
            let parkingEndTime = endTime ? parseInt(endTime) : null;
            let expireDateTime = moment(
                moment(macroTarget.createdAt).add(1, "d").format("YYYY-MM-DD")
            );
            let macroStartTime = moment(macroTarget.createdAt);

            if (parkingStartTime !== null && parkingEndTime !== null) {
                if (parkingStartTime > parkingEndTime) {
                    expireDateTime = moment(
                        moment(macroTarget.createdAt)
                            .add(1, "d")
                            .format(`YYYY-MM-DD ${endHour}:${endMinute}`)
                    );
                } else {
                    expireDateTime = moment(
                        moment(macroTarget.createdAt).format(
                            `YYYY-MM-DD ${endHour}:${endMinute}`
                        )
                    );
                }
                macroStartTime = moment(
                    moment(macroTarget.createdAt).format(
                        `YYYY-MM-DD ${startHour}:${startMinute}`
                    )
                );
            }
            consola.info(
                "Target payLogUid Macro Start Time: ",
                macroStartTime.format("YYYY-MM-DD HH:mm")
            );
            consola.info(
                "Target payLogUid Expire Date Time: ",
                expireDateTime.format("YYYY-MM-DD HH:mm")
            );

            if (moment().isBefore(expireDateTime)) {
                if (moment().isAfter(macroStartTime)) {
                    consola.info("#####Start Macro");
                    await macro.start(macroTarget);
                } else {
                    consola.info("#####Not yet Macro");
                }
            } else {
                macroTarget.expired = true;
                await macroTarget.save();
                consola.info("#####Expired Ticket");
            }
        }
        consola.info(
            "##############END parking ticket scheduler###############"
        );
    }
}
