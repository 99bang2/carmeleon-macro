//동익드미라벨
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
        ignoreHTTPSErrors:true,
        args: [
            '--ignore-certificate-errors',
            '--disable-setuid-sandbox',
            '--no-sandbox',
        ]
    })
    try {
        const context = await browser.createIncognitoBrowserContext()
        const page = await context.newPage()

        //Test 용 창 default headless
        await page.setViewport({
            width: 1920,
            height: 1080
        })
        // 사이트 진입
        await page.goto(siteUrl, {waitUntil: 'domcontentloaded'})
        await page.waitForSelector('#loginForm')
        await page.type('#userId', parkingSiteId)
        await page.type('#loginForm > li.input_pw > input', parkingSitePassword)
        await page.waitForSelector('#btnLogin')
        await page.click('#btnLogin')
        await page.waitForNavigation({
            waitUntil: 'networkidle0'
        })
        //차량검색
        let parsedCarNumber = carNumber.slice(-4)
        let count = 0;
        //차량번호 2자리 이상 작성하라는 알럿창
        await page.waitForSelector('#modal-window', {visible: true})
        // await page.click('#modal-window > div > div > div.modal-buttons > a')
        await page.keyboard.press("Escape");
        await page.waitForTimeout(2000)

        for (let i = 0; i < macroButtonMap[discountTicketUid][1]; i++) {
            await page.waitForSelector('#schCarNo')
            await page.type('#schCarNo', parsedCarNumber)
            await page.click('#sForm > input.btnS1_1.btn')

            //차량선택
            let index = 2;
            await page.waitForTimeout(3000)
            let tableLength = await page.$$eval('#gridMst > div.objbox > table > tbody>tr', ele => ele.length)
            let isOneResult = tableLength
            while (tableLength > 1) {
                await page.waitForTimeout(1000)
                let searchText
                if (isOneResult === 2) {
                    searchText = await page.$eval('#gridMst > div.objbox > table > tbody > tr.ev_dhx_skyblue.rowselected > td.cellselected', ele => ele.textContent)
                } else {
                    searchText = await page.$eval('#gridMst > div.objbox > table > tbody > tr:nth-child(' + index + ') > td:nth-child(2)', ele => ele.textContent)
                }
                searchText = searchText.trim()
                if (searchText.indexOf('건') != -1) {
                    let tempIndex = parseInt(searchText.split(' ')[1].charAt(0))
                    searchText = searchText.split(' ')[0]
                    if (tempIndex != 0 && i === 0) {
                        i += tempIndex
                    }
                }
                if (carNumber === searchText) {
                    if (isOneResult !== 2) {
                        await page.waitForTimeout(1000)
                        await page.click('#gridMst > div.objbox > table > tbody > tr:nth-child(' + index + ')')
                        await page.waitForTimeout(3000)
                    }
                    await page.$eval('#memo', el => el.value = '모빌엑스 할인')
                    await page.waitForSelector(macroButtonMap[discountTicketUid][0])
                    await page.click(macroButtonMap[discountTicketUid][0])
                    await page.waitForSelector('#modal-window', {visible: true})
                    await page.click('#modal-window > div > div > div.modal-buttons > a')
                    await page.waitForTimeout(1000)
                    count++
                }
                index++
                tableLength--
            }
            await page.$eval('#schCarNo', el => el.value = '')
        }
        if (count === macroButtonMap[discountTicketUid][1]) {
            result = true
            consola.info(`## OK [${siteName}] macro`, {
                carNumber,
                discountTicketUid,
            })
        }
    } catch (e) {
        consola.error(e)
    } finally {
        consola.info(`## END [${siteName}] macro`, {
            carNumber,
            discountTicketUid,
        })
        if (process.env.NODE_ENV === "production") {
            await browser.close()
        }
    }
    return result
}
