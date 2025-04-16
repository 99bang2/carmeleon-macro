const remote = require("../remoteFunc");

exports.start = async (macroTarget) => {
  const {
    carNumber,
    discountTicketUid,
    macroButtonMap,
    parkingSiteId,
    parkingSitePassword,
    parkingSiteName,
    url: siteUrl,
  } = macroTarget;

  let result = false;
  remote.printLog("Start", macroTarget);

  try {
    await remote.chromeInit(siteUrl);
    await remote.click(".popup-close");
    await remote.click(
      "body > header > section > div.login-box > div:nth-child(3)"
    );
    await remote.inputText("#email", parkingSiteId);
    await remote.inputText("#password", parkingSitePassword);

    await remote.click('button[id="login"]', "submit");
    await remote.select("#parkinglotList", parkingSiteName, "submit");
    await remote.click("#webdiscount", "submit");
    await remote.inputText("#carNo", carNumber.slice(-4));

    await remote.click("#searchSubmitByDate", "submit");

    const detailList = await remote.$$(".discount-car");
    for (el of detailList) {
      const innerText = await (await el.getProperty("innerText")).jsonValue();
      if (innerText.includes(carNumber)) {
        const selectButton = await el.$(".selectCarInfo");
        selectButton.click();
        await remote.select(
          `#selectDiscount`,
          macroButtonMap[discountTicketUid],
          false
        );
        await remote.click("#discountSubmit");
        remote.printLog("Ok", macroTarget);
        result = true;
        break;
      }
    }
    if (!result) {
      remote.printLog("Warning", macroTarget, "입력한 차량 정보가 없습니다.");
    }
  } catch (e) {
    result = false;
    remote.printLog(e);
  } finally {
    remote.printLog("End", macroTarget);
    if (process.env.NODE_ENV === "production") {
      await remote.close();
    }
  }
  return result;
};
