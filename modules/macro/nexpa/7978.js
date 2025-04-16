'use strict'
// 어반플레이스호텔
const puppeteer = require('puppeteer')
const consola = require('consola')

exports.start = async (macroTarget) => {
    let result = false
    
    const {
        carNumber,
        discountTicketUid,
        macroButtonMap,
        parkingSiteId,
        parkingSitePassword,
        parkingSiteName: siteName,
        url: siteUrl,
    } = macroTarget;

    consola.info(`## Start [${siteName}] macro`, {
        carNumber,
        discountTicketUid,
    })

    //브라우저 진임
    const browser = await puppeteer.launch({
        headless: process.env.NODE_ENV === "production",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    try{
        const page = await browser.newPage()

        //Test 용 창 default headless
        await page.setViewport({
            width: 1920,
            height: 1080
        })
        await page.goto(siteUrl)
        await page.waitForSelector('body > div > div > form')
        await page.type('#login_id', parkingSiteId)
        await page.type('#login_pw', parkingSitePassword)
        await page.click('button:nth-child(1)')
        await page.waitForTimeout(2000)

        // //차량번호 파싱
        let parsedCarNumber = carNumber.slice(-4)
        // //차량번호 입력
        await page.type('#carNumber', parsedCarNumber)
        await page.click('button.btn-primary')
        await page.waitForTimeout(1000)
        let index=1
        let tableLength = await page.$$eval('#divAjaxCarList > tr',ele=>ele.length)
        let isCar = await page.$eval('#divAjaxCarList > tr>td',ele=>ele.textContent)
        if(isCar !== '입차된 차량이 없습니다.'){
            while(index < tableLength +1){
                let searchText = await page.$eval('#divAjaxCarList>tr:nth-child('+index+')>td:nth-child(2)', ele=> ele.textContent)
                if(searchText === carNumber){
                    await page.click('#divAjaxCarList>tr:nth-child('+index+')>td:nth-child(2) > a')
                    // 기다린 후 확인
                    await page.waitForSelector('#chk_info1')
                    let checkPage = await page.$eval('#carDetail > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2)', ele=>ele.textContent)
                    if(checkPage.trim() === carNumber){
                        // 할인권 선택
                        await page.click(macroButtonMap[discountTicketUid])
                        result = true
                        consola.info(`## OK [${siteName}] macro`, {
                            carNumber,
                            discountTicketUid,
                        })
                    }
                    break;
                }
                index++
            }
        }
    }catch (e) {

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
