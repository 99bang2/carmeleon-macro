const { Amano } = require('../remoteFunc');
exports.start = async macroTarget => {
  let result = false;

  const remote = new Amano(macroTarget);

  remote.start();
  try {
    await remote.chromeStart();
    await remote.login();

    if (await remote.selectorCheck('#modal-window')) {
      await remote.pressKeyboard('Escape');
    }

    await remote.carNumberType('#schCarNo');
    await remote.selectorClick('.btnS1_1.btn');

    result = await remote.selectTable('#gridMst');
  } catch (e) {
    remote.error(e);
  } finally {
    remote.end();
    if (process.env.NODE_ENV === 'production') {
      await remote.chromeClose();
    }
  }
  return result;
};
