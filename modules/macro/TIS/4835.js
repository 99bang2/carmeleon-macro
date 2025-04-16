'use strict'
// 메가스타영종
const puppeteer = require('puppeteer')
const consola = require('consola')

exports.start = async (macroTarget) => {
    let result = false
    
    const {
        carNumber,
        discountTicketUid,
        parkingSiteId,
        parkingSitePassword,
        parkingSiteName: siteName,
        url: siteUrl,
    } = macroTarget;

    consola.info(`## Start [${siteName}] macro`, {
        carNumber,
        discountTicketUid,
    })

    const browser = await puppeteer.launch({
        headless: process.env.NODE_ENV === "production",
        args: ['--no-sandbox', '--disable-setuid-sandbox','--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process','--disable-features=site-per-process']
    })
    try{
        const page = await browser.newPage()

        //Test 용 창 default headless
        await page.setViewport({
            width: 1920,
            height: 1080
        })

        // 사이트 진입
        await page.goto(siteUrl)
        await page.waitForSelector('button')
        await page.type('input#UserId', parkingSiteId)
        await page.type('input#UserPassword', parkingSitePassword)
        await page.click('button')

        await page.waitForTimeout(3000)
        //차량검색
        let parsedCarNumber = carNumber.slice(-4)
        const frameHandle = await page.$("iframe[id='IFrame']")
        const frame = await frameHandle.contentFrame()

        await frame.type('#CarNumber', parsedCarNumber)
        await frame.click('#Button_SearchCar')

        // //차량 리스트 불러오기
        let index = 1;
        let tableLength = await frame.$$eval('#Layer_CarList',ele => ele.length)
        // 차량 있고 없고 여부 확인
        let isCar = await frame.$eval('#Layer_Empty',ele=>{
            return ele.style.display !== 'none'
        })
        // 차량 없을때 알럿 확인
        page.on('dialog', async dialog=> {
            await dialog.accept()
        })
        if(isCar){
            while(tableLength > 0){
                await page.waitForTimeout(1000)
                let searchText = await frame.$eval('#Layer_CarList > div:nth-child('+index+') > div.clearfix.collapsed.withripple > div:nth-child(1) > h4', ele=>ele.textContent)
                if(carNumber === searchText.trim()){
                    await frame.click('#Layer_CarList > div:nth-child('+index+') > div.clearfix.collapsed.withripple')
                    const isNotHidden = await frame.$eval('#Layer_Button_Init_1', (elem) => {
                        return elem.style.display !== 'none'
                    })
                    if(!isNotHidden){
                        await frame.waitForTimeout(2000)
                        await frame.click('#Button_Time_24_1')
                        await frame.waitForSelector('#Button_ModalOk')
                        await frame.click('#Button_ModalOk')
                        result = true
                        consola.info(`## OK [${siteName}] macro`, {
                            carNumber,
                            discountTicketUid,
                        })
                    }
                }
                index++;
                tableLength--;
            }
        }
    }catch (e) {
        consola.error(e)
    }finally {
        consola.info(`## END [${siteName}] macro`, {
            carNumber,
            discountTicketUid,
        })
        if (process.env.NODE_ENV === "production") {
            await browser.close();
        }
    }
    return result
}
