'use strict'
// 힐스테이트삼송역
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
        await page.waitForSelector('#form1 > div.login-wrap > div')
        await page.type('#id', parkingSiteId)
        await page.type('#pw', parkingSitePassword)
        await page.click('#btnLogin')
        await page.waitForTimeout(2000)

        //주차장확인
        await page.click('#ContentPlaceHolder1_btnParking')
        await page.waitForSelector('#ContentPlaceHolder1_Repeater1_btnParkCd_0')
        await page.click('button[value="413"]')

        //차량번호 입력
        await page.click('#form1 > div.wrap > div.content > div > div.ticket-point-wrap > div.car-number-search-wrap > button')
        await page.waitForSelector('#form1 > div.wrap > div > div > div.car-select-list-wrap > ul')
        let searchCarList = await page.$$eval('#form1 > div.wrap > div > div > div.car-select-list-wrap > ul > li > label > div.car-number',
            searchCars =>searchCars.map(searchCar=>searchCar.textContent)
        )
        //차량 선택
        let searchCarIndex = searchCarList.indexOf(carNumber)
        if(searchCarIndex >= 0){
            await page.click( `#form1 > div.wrap > div > div > div.car-select-list-wrap > ul > li:nth-child(${searchCarIndex+1})`)
            await page.click('#form1 > div.wrap > div > div > div.button-wrap > a')

            //할인권 페이지 로딩
            await page.waitForSelector('#form1 > div.wrap > div > div > div.ticket-select-wrap > div.ticket-select > button')

            let isChecked = await page.$('#ContentPlaceHolder1_ourStore > ul')
            //할인권 적용
            if(!isChecked){
                await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
                await page.click('#form1 > div.wrap > div > div > div.ticket-select-wrap > div.ticket-select > button')
                await page.click('#form1 > div.wrap > div > div > div.ticket-select-wrap > div.ticket-select > ul > li > button')
                await page.click('#form1 > div.wrap > div > div > div.button-wrap > button')

                //확인
                await page.click('#buyTicket')
                result = true
                consola.info(`## OK [${siteName}] macro`, {
                    carNumber: carNumber,
                    discountTicketUid: discountTicketUid
                })
            }
        }
    }catch (e) {
        consola.error(e)
    }finally {
        consola.info(`## End [${siteName}] macro`, {
            carNumber,
            discountTicketUid,
        })
        if (process.env.NODE_ENV === "production") {
            await browser.close();
        }
    }
    return result
}
