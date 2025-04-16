'use strict'
// 강남푸르지오시티2차
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
        await page.waitForSelector('#bodyCSS > div > div > div.row.center.div_bordered > div.col-7 > div > div')
        await page.type('#login_id', parkingSiteId)
        await page.type('#login_pw', parkingSitePassword)
        await page.click('input[value="로그인"]')
        await page.waitForSelector('#searchCarNo')

        // #searchCarNo
        //차량번호 파싱
        let parsedCarNumber = carNumber.slice(-4)
        //차량번호 입력
        await page.type('#searchCarNo', parsedCarNumber)
        await page.click('#btnSearch')
        await page.waitForTimeout(2000)
        let index = 1
        let tableLength= await page.$$eval('#divAjaxCarList > tbody>tr', ele=>ele.length)
        let isCar = await page.$eval('#divAjaxCarList > tbody > tr:nth-child('+index+') > td',ele=>ele.textContent)
        if(isCar !== '입차차량없음') {
            while(index< tableLength+1){
                let searchText = await page.$eval('#divAjaxCarList > tbody > tr:nth-child('+index+') > td', ele => ele.textContent)
                if(searchText === carNumber){
                    await page.click('#divAjaxCarList> tbody >tr:nth-child('+index+')>td > a')
                    await page.waitForTimeout(500)
                    let isCarNumber = await page.$eval('#CarNumber',ele=>ele.value)
                    if(carNumber === isCarNumber){
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
