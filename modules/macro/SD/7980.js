'use strict'
// V-PLEX
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
        await page.waitForSelector('input[value="로그인"]')
        await page.type('#TextBox_ID', parkingSiteId)
        await page.type('#TextBox_Pwd', parkingSitePassword)
        await page.click('input[value="로그인"]')
        await page.waitForTimeout(2000)

        //차량검색
        let parsedCarNumber = carNumber.slice(-4)
        // //차량번호 입력
        await page.type('#TextBox_CarNum', parsedCarNumber)
        await page.click('input[value="검색"]')
        await page.waitForTimeout(2000)

        //검색내용 확인
        let isCar = await page.$eval('#Label_Message',ele=>ele.textContent)

        if(isCar !== '검색 결과가 없습니다.'){
            let index = 2
            let tableLength= await page.$$eval('#DataGrid1 > tbody > tr',ele=>ele.length)
            while(index < tableLength+1){
                let searchText = await page.$eval('#DataGrid1 > tbody > tr:nth-child('+index+') > td:nth-child(1)',ele=>ele.textContent)
                if( carNumber === searchText.trim()){
                    await page.click('#DataGrid1 > tbody > tr:nth-child('+index+') > td:nth-child(3)>a')
                    await page.waitForSelector('#Button_Discount')
                    // 할인종류 선택
                    await page.select('#DropDownList_Discount', macroButtonMap[discountTicketUid]);
                    await page.click('#Button_Discount')
                    result=true
                    consola.info(`## OK [${siteName}] macro`, {
                        carNumber,
                        discountTicketUid,
                    })
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
