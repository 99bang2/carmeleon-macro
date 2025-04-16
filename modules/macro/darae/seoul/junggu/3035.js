'use strict'
// 패스트파이브타워
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
    try {
        const page = await browser.newPage()

        //Test 용 창 default headless
        await page.setViewport({
            width: 1920,
            height: 1080
        })
        await page.goto(siteUrl)
        await page.waitForSelector('#login_form')
        await page.type('#user_id', parkingSiteId)
        await page.type('#password', parkingSitePassword)
        await page.click('input[value="로그인"]')
        await page.waitForTimeout(2000)

        //차량번호 파싱
        let parsedCarNumber = carNumber.slice(-4)
        //차량번호 입력
        await page.type('#license_plate_number', parsedCarNumber)
        await page.click('#search_form > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > input[type=button]:nth-child(8)')
        await page.waitForTimeout(1000)

        let checkData = await page.$eval('#search_form > table > tbody > tr > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2)', element => element.textContent)
        if(checkData !== '검색된 차량 정보가 없습니다.'){
            //테이블에서 차량 번호와 비교
            let rows = await page.$$eval('#search_form > table > tbody > tr > td:nth-child(2) > table:nth-child(3) tr', rows => {
                return Array.from(rows, row => {
                    const columns = row.querySelectorAll('td:nth-child(2)');
                    return Array.from(columns, column => column.innerText);
                })
            })

            //테이블에서 가져온 값을 checkArray에 담기
            let checkArray =[]
            for(let index = 1 ; index<rows.length-1; index++){
                checkArray.push(rows[index][0].split('\n')[0])
            }
            let isCarNumber = false
            let index = 2
            // checkArray에 인자 있을 때 까지 반복
            while(checkArray.length > 0){
                //차량정보가 있는지 체크
                let element = await page.$('#search_form > table > tbody > tr > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child('+index+') > td:nth-child(2)')
                if(element){
                    let evalData = await page.evaluate(element=> element.textContent.trim().split('\n')[0], element)

                    //검색이된 data의 경우, checkArray에서 제거 해줌
                    checkArray.splice(checkArray.indexOf(evalData),1)
                    if( evalData === carNumber|| ( evalData.length > 4 && carNumber.includes(evalData))){
                        await page.click('#search_form > table > tbody > tr > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child('+index+') > td:nth-child(1)')
                        isCarNumber=true
                        await page.waitForTimeout(1000)
                        await page.click(macroButtonMap[discountTicketUid])
                        await page.waitForTimeout(2000)
                        let isDiscount = await page.$eval('#search_form > table > tbody > tr > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child('+index+') > td:nth-child(5)', element=> element.textContent )
                        if(isDiscount) {
                            result = true
                            consola.info(`## OK [${siteName}] macro`, {
                                carNumber,
                                discountTicketUid,
                            })
                        }
                    }
                }
                if(isCarNumber) break;
                index++;
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
