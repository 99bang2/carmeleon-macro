// 교대역동측공영주차장
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
        await page.waitForSelector('#loginForm')
        await page.type('#userId',parkingSiteId)
        await page.type('#loginForm > li.input_pw > input',parkingSitePassword)
        await page.click('#btnLogin')

        //차량번호 2자리 이상 작성하라는 알럿창
        await page.waitForSelector('#modal-window')
        // await page.click('#modal-window > div > div > div.modal-buttons > a')
        await page.keyboard.press("Escape");

        await page.waitForTimeout(2000)
        //차량검색
        let parsedCarNumber = carNumber.slice(-4)
        await page.waitForSelector('#schCarNo')
        await page.type('#schCarNo',parsedCarNumber)
        await page.click('#sForm > input.btnS1_1.btn')

        //차량선택
        let index=2;
        await page.waitForTimeout(1000)
        let tableLength=await page.$$eval('#gridMst > div.objbox > table > tbody>tr',ele=>ele.length)
        let isOneResult = tableLength
        while(tableLength>0){
            await page.waitForTimeout(1000)
            let searchText
            if(isOneResult === 2){
                searchText = await page.$eval('#gridMst > div.objbox > table > tbody > tr.ev_dhx_skyblue.rowselected > td.cellselected',ele=>ele.textContent)
            }else{
                searchText=await page.$eval('#gridMst > div.objbox > table > tbody > tr:nth-child('+index+') > td:nth-child(2)',ele=>ele.textContent)
            }
            if(carNumber===searchText.trim()){
                if(isOneResult !==2){
                    await page.click('#gridMst > div.objbox > table > tbody > tr:nth-child('+index+') > td:nth-child(2)')
                }

                await page.waitForSelector(macroButtonMap[discountTicketUid])
                await page.click(macroButtonMap[discountTicketUid])
                result=true
                consola.info(`## OK [${siteName}] macro`, {
                    carNumber,
                    discountTicketUid,
                })
            }
            index++
            tableLength--
        }
    }catch (e) {
        consola.error(e)
    }finally {
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
