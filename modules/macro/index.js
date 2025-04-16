'use strict'
const consola = require('consola')
const models = require('../../models')

const parkingData = require("./dataController");

exports.start = async (macroTarget) => {
    const {siteUid: parkingSiteUid} = macroTarget;

    let macroUrl = await models.healthcheck.macroUrl.findOne({
        where: {
            parkingSiteUid
        },
    })

    let tempMacroTarget
    if(process.env.NODE_ENV === "development") {
        tempMacroTarget = {
            ...macroTarget,
            ...macroUrl.dataValues,
            ...parkingData[parkingSiteUid],
        };
    }else{
        tempMacroTarget = {
            ...macroTarget.dataValues,
            ...macroUrl.dataValues,
            ...parkingData[parkingSiteUid],
        };
    }
    const {filePath: workerFile} = tempMacroTarget;
    consola.info('# WorkerFile', workerFile)

    if (workerFile) {
        try {
            let worker = require(workerFile)
            let result = await worker.start(tempMacroTarget)
            if (process.env.NODE_ENV === "production" && result) {
                consola.info('success')
                macroTarget.activeStatus = true
                await macroTarget.save()
            }
        } catch (e) {
            consola.error(e)
        }
    }
}
