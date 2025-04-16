const puppeteer = require('puppeteer');
const consola = require('consola');

const timeout = 2000;

class Consola {
  constructor(macroSetting) {
    this.carNumber = macroSetting.carNumber ?? macroSetting.carPlate;
    this.parkingSiteName = macroSetting.parkingSiteName;
    this.discountTicketUid =
      macroSetting.discountTicketUid ?? macroSetting.ticketMacroId;
  }

  start() {
    consola.info(`## Start [${this.parkingSiteName}] macro`, {
      carNumber: this.carNumber,
      discountTicketUid: this.discountTicketUid,
    });
  }

  end() {
    consola.info(`## End [${this.parkingSiteName}] macro`, {
      carNumber: this.carNumber,
      discountTicketUid: this.discountTicketUid,
    });
  }

  error(e) {
    consola.error(e);
  }

  info(message) {
    consola.info(`## Info [${this.parkingSiteName}] macro`, {
      carNumber: this.carNumber,
      discountTicketUid: this.discountTicketUid,
      message,
    });
  }
}

class Remote extends Consola {
  constructor(macroSetting) {
    super(macroSetting);
    this.macroButtonMap = macroSetting.macroButtonMap;
    this.parkingSiteId = macroSetting.parkingSiteId;
    this.parkingSitePassword = macroSetting.parkingSitePassword;
    this.url = macroSetting.url;

    this.browser = null;
    this.page = null;
  }

  async chromeStart() {
    try {
      const browser = await puppeteer.launch({
        headless: process.env.NODE_ENV === 'production',
        ignoreHTTPSErrors: true,
        defaultViewport: null,
        args: [
          '--ignore-certificate-errors',
          '--disable-setuid-sandbox',
          '--no-sandbox',
          '--start-maximized',
        ],
      });
      const [page] = await browser.pages();
      this.page = page;
      this.browser = browser;

      await this.page.goto(this.url);
    } catch (error) {
      throw error;
    }
  }

  async chromeClose() {
    await this.browser.close();
  }

  async waitSelector(target) {
    await this.page.waitForNetworkIdle({ timeout, idleTime: 500 }).catch(() => {
      throw `Network 에러`;
    });

    if (typeof target === 'object') {
      for (let element of target) {
        await this.page
          .waitForSelector(element, { timeout, visible: true })
          .catch(() => {
            throw `${element} 요소가 없습니다.(obj_selector)`;
          });
      }
    } else {
      await this.page
        .waitForSelector(target, { timeout, visible: true })
        .catch(() => {
          throw `${target} 요소가 없습니다.(element_selector)`;
        });
    }
  }

  async login() {
    await this.page
      .waitForXPath('*//input[@type="text" or @type="password"]', {
        timeout,
        visible: true,
      })
      .catch(() => {
        throw 'Input을 찾을 수 없습니다.';
      });

    await this.page
      .waitForXPath('//*[@type="button" or @type="submit"]', {
        timeout,
        visible: true,
      })
      .catch(() => {
        throw 'button을 찾을 수 없습니다.';
      });

    const [id] = await this.page.$x('*//input[@type="text"]');
    const [pwd] = await this.page.$x('*//input[@type="password"]');
    const [btn] = await this.page.$x('//*[@type="button" or @type="submit"]');

    await id.type(this.parkingSiteId);
    await pwd.type(this.parkingSitePassword);
    await btn.click();
    await this.page.waitForNetworkIdle();
  }

  async selectorClick(target) {
    await this.waitSelector(target);
    await this.page.click(target);
    await this.page.waitForNetworkIdle();
  }

  async selectorCheck(target) {
    return await this.page
      .waitForSelector(target, { timeout, visible: true })
      .then(() => true)
      .catch(() => false);
  }

  async carNumberType(target) {
    await this.waitSelector(target);
    await this.page.type(target, this.carNumber.slice(-4)); // 테스트 검색
  }

  async pressKeyboard(target) {
    await this.page.keyboard.press(target);
    await this.page.waitForNetworkIdle();
  }
}

class Amano extends Remote {
  constructor(macroSetting) {
    super(macroSetting);
  }

  async selectTable(target) {
    const btn = this.macroButtonMap[this.discountTicketUid];
    await this.waitSelector(target);
    const [searchCar] = await this.page.$x(
      `*//td[contains(., "${this.carNumber}")]`,
    );

    if (searchCar) {
      if (Array.isArray(btn)) {
        //마곡동익드미라벨 연일권 적용을 위한 조건
        for (let index = 0; index < btn[1]; index++) {
          const [searchCar] = await this.page.$x(
            `*//td[contains(., "${this.carNumber}")]`,
          );
          await searchCar.click();
          await this.page.waitForNetworkIdle();
          await this.selectorClick(btn[0]);
          await this.selectorClick('.modal-btn');
        }
      } else {
        //나머지 Amano 조건
        await searchCar.click();
        await this.selectorClick(this.macroButtonMap[this.discountTicketUid]);
      }
      return true;
    } else {
      this.info('차량이 존재하지 않습니다.');
      return false;
    }
  }
}

module.exports = {
  Amano,
};
