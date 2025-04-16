'use strict'
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

        // 사이트 진입
        await page.goto(siteUrl)
        await page.waitForSelector('#sc-login-form')
        await page.type('#sc-login-form > div > div:nth-child(1) > div > input', parkingSiteId)
        await page.type('#sc-login-form > div > div:nth-child(2) > div > input', parkingSitePassword)
        await page.click('#sc-login-form > div > div.uk-margin-large-top > a')
        await page.waitForTimeout(2000)
        //검색 창에 차량번호 입력
        await page.type('#sc-page-content > div > div > div > div.uk-card-body > div > div:nth-child(1) > div > input', carNumber)
        await page.waitForTimeout(1000)
        let element = await page.$('#sc-page-content > div > div > div > div.uk-card-body > div > div.uk-width-1-1.uk-grid-margin.uk-first-column > div > table > tbody > tr td:first-child')
        let text = await page.evaluate(element => element.textContent, element)
        text = text.trim()
        if (text === carNumber) {
            await page.click('#sc-page-content > div > div > div > div.uk-card-body > div > div.uk-width-1-1.uk-grid-margin.uk-first-column > div > table > tbody > tr')
            await page.waitForTimeout(1000)
            //버튼클릭
            await page.click(macroButtonMap[discountTicketUid])
            await page.waitForSelector('body > div.uk-notification.uk-notification-top-right > div > div > div')
            let resultNotiEle = await page.$('body > div.uk-notification.uk-notification-top-right > div > div > div')
            let resultText = await page.evaluate(resultNotiEle => resultNotiEle.textContent, resultNotiEle)
            if (resultText === '할인권을 적용 하였습니다.') {
                result = true
                consola.info(`## OK [${siteName}] macro`, {
                    carNumber,
                    discountTicketUid,
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
