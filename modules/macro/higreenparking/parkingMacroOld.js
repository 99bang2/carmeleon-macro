//하이그린파킹 OLD
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
        parkingSiteName,
        selectorMap,
        url: siteUrl,
    } = macroTarget;
    consola.info(`## Start [${parkingSiteName}] macro`, {
        carNumber,
        discountTicketUid
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
    try{
        const page = await browser.newPage()

        //Test 용 창 default headless
        await page.setViewport({
            width: 1920,
            height: 1080
        })

        // 사이트 진입
        await page.goto(siteUrl)
        await page.waitForSelector('#login')
        await page.type('#name', parkingSiteId)
        await page.type('#pwd', parkingSitePassword)
        await page.click('input[value="로그인"]')
        await page.waitForTimeout(2000)
        // //차량번호 파싱
        let parsedCarNumber = carNumber.slice(-4)
        // //차량번호 입력
        await page.waitForSelector('#carNumber')
        await page.type('#carNumber', parsedCarNumber)
        await page.click('input[value="조회"]')
        await page.waitForTimeout(2000)

        // // 다이얼로그 발생 시 이벤트 추가 (21.01.12 정재규)
        await page.on("dialog", (dialog) => {
            // 차량번호 포함 여부 및 메세지로 다이얼로그 구분 (추가 상황 검토 필요)
            if(dialog.message().indexOf(carNumber) !== -1 && dialog.message().indexOf('할인을 적용') !== -1){
                dialog.accept()
            }else {
                dialog.dismiss()
            }
        });

        let checkPageType = await page.$eval('h1',ele => ele.textContent)
        //페이지 이동후 하나도 없을 때

        // tower 8 예외처리/////////////////////////////////////////////////
        let exceptSelectorMap = selectorMap[0] === 4 ? 5 :selectorMap[0]
        //////////////////////////////////////////////////////////////////

        let discountList;
        let disCountListLength;

        if(checkPageType === '입차 차량 조회'){}
        //한개만 나올 경우
        else if(checkPageType === '차량 세부 정보'){
            /* 기존 할인이 있는지 tr 개수 체크 */
            discountList = await page.$eval(`body > table:nth-child(${selectorMap[0]}) > tbody > tr:nth-child(${exceptSelectorMap}) > td:nth-child(2) > table > tbody`, ele => ele.children);
            disCountListLength = Object.keys(discountList).length; // 1 == 할인X 2 == 할인중

            let textarea= await page.$eval(`body > table:nth-child(${selectorMap[0]}) > tbody > tr:nth-child(${selectorMap[1]}) > td:nth-child(2)`, ele=>ele.textContent )
            let checkCarNumber = textarea.trim().split('\n')[1].split(':')[1].trim() //검색된 차량번호 추출
            if(carNumber === checkCarNumber && disCountListLength === 1){
                await page.click(macroButtonMap[discountTicketUid])
                result = true
                consola.info(`## OK [${parkingSiteName}] macro`, {
                    carNumber,
                    discountTicketUid,
                })
            }
        }
        //여러개인 경우
        else{
            let index=2
            let tableLength = await page.$$eval(`body > table:nth-child(${selectorMap[0]}) > tbody> tr`,ele=>ele.length)
            while(index < tableLength+1){
                /* 기존 할인이 있는지 tr 개수 체크 */
                discountList = await page.$eval(`body > table:nth-child(${selectorMap[0]}) > tbody > tr:nth-child(${exceptSelectorMap}) > td:nth-child(2) > table > tbody`, ele => ele.children);
                disCountListLength = Object.keys(discountList).length; // 1 == 할인X 2 == 할인중

                let searchText = await page.$eval(`body > table:nth-child(${selectorMap[0]}) > tbody > tr:nth-child(${index}) > td:nth-child(2)`,ele=>ele.textContent)
                searchText = searchText.split('\n')[1].split(':')[1].trim()
                if(searchText === carNumber){
                    await page.click(`body > table:nth-child(${selectorMap[0]}) > tbody > tr:nth-child(${index}) > td:nth-child(2)`)
                    await page.waitForTimeout(2000)
                    // 차량 검색
                    let textarea= await page.$eval(`body > table:nth-child(${selectorMap[0]}) > tbody > tr:nth-child(${selectorMap[1]}) > td:nth-child(2)`, ele=>ele.textContent )
                    let checkCarNumber = textarea.trim().split('\n')[1].split(':')[1].trim() //검색된 차량번호 추출
                    if(carNumber === checkCarNumber && disCountListLength === 1){
                        await page.click(macroButtonMap[discountTicketUid])
                        result = true
                        consola.info(`## OK [${parkingSiteName}] macro`, {
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
        consola.info(`## END [${parkingSiteName}] macro`, {
            carNumber,
            discountTicketUid,
        })
        if (process.env.NODE_ENV === "production") {
            await browser.close();
        }
    }
    return result
}
