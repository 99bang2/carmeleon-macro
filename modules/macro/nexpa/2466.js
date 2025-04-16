'use strict'
// 파크빌딩
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
        await parsedCarNumber.split('').forEach(e=>{
            page.keyboard.down(Number(e))
        })
        await page.keyboard.down('Enter')

        //검색 결과 처리
        let table_is_loaded = true;
        await page.waitForSelector('#divAjaxCarList > tr',{visible:true, timeout:5000}).catch(e => table_is_loaded = false);
        
        if(table_is_loaded){
            await page.evaluate(({carNumber}) => {
                document.querySelectorAll('#divAjaxCarList > tr > td > a').forEach((e)=>{
                    if(e.innerText === carNumber){
                        e.click()
                    }
                })
            },{carNumber});
            await page.click(macroButtonMap[discountTicketUid])
            result = true
            consola.info(`## OK [${siteName}] macro`, {
                                    carNumber,
                                    discountTicketUid,
                                })
        } else{
            consola.error('검색 결과 없음.')
        }
    } catch (e) {
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
