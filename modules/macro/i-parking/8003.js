'use strict'
// 우리W타워
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

    try {
        const page = await browser.newPage()
        await page.setUserAgent(
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36'
        )
        //Test 용 창 default headless
        await page.setViewport({
            width: 1920,
            height: 1080
        })

        // 사이트 진입
        await page.goto(siteUrl)
        await page.waitForSelector('#skip')
        await page.click('#skip')

        await page.waitForSelector('#popupOk')
        await page.click('#popupOk')

        await page.waitForTimeout(1000)
        await page.waitForSelector('#container > section > div.cont > fieldset')
        await page.type('#id', parkingSiteId)
        await page.type('#password', parkingSitePassword)
        await page.click('#login')
        await page.waitForTimeout(4000)

        await page.waitForSelector('#information')
        await page.evaluate(() => {
            document.querySelector('#chkRemove2').click()
            document.querySelector('#gohome').click()
        })

        //tutorial창 종료
        await page.waitForSelector('#tutorial')
        await page.evaluate(() => {
            document.querySelector('#chkRemove').click()
            document.querySelector('#start').click()
        })

        //차량번호 파싱
        let parsedCarNumber = carNumber.slice(-4)

        //검색 창에 차량번호 입력
        await page.waitForSelector('#carNumber')
        await page.type('#carNumber', parsedCarNumber)
        await page.click('#container > section.sec-inp > div.cont > div > button')

        //table length 구하기
        await page.waitForSelector('#carList >tr')
        await page.waitForTimeout(1000)
        let tableLength = await page.$$eval('#carList >tr', ele => ele.length)

        let isCar = await page.$eval('#parkName', ele => ele.textContent)
        if (isCar !== '검색된 차량이 없습니다.') {
            let index = 1
            while (index <= tableLength) {
                let compareText = await page.$eval(`#carList > tr:nth-child(${index}) > td:nth-child(2)`, ele => ele.textContent)
                compareText = compareText.trim()
                if (compareText === carNumber) {
                    //차량체크후 다음단계로 넘어가는 부분
                    await page.click(`#carList > tr:nth-child(${index})`)
                    await page.waitForTimeout(1000)
                    await page.evaluate(() => {
                        document.querySelector('#next').click()
                    })

                    // 버튼이 disable인지 판단하는 부분
                    await page.waitForSelector('.btn-apply')
                    const is_disabled = await page.$eval('.btn-apply', (button) => {
                        return button.disabled;
                    });

                    await page.waitForTimeout(1000)
                    if(!is_disabled){ //disable이 아닐때(할인권이 미적용 상태일 때만 로직을 실행한다.)
                        //실제 쿠폰을 적용하는 부분
                        await page.waitForSelector('#productList > tr > td:nth-child(3) > button')
                        await page.click('#productList > tr > td:nth-child(3) > button')


                        //팝업 확인 // 이게 없어요
                        await page.waitForSelector('#confirmPopup')
                        await page.click('#popupOk')

                        //결과
                        await page.waitForSelector('#popMessage')
                        let message = await page.$eval('#popMessage', ele => ele.textContent)

                        if (message === '할인권 1장이 적용되었습니다.') {
                            await page.click('#popupOk')
                            result = true
                            consola.info(`## OK [${siteName}] macro`, {
                                carNumber,
                                discountTicketUid,
                            })
                        }
                    }
                    break;
                }
                index++;
            }
        } else {
            console.log('검색된 챠량이 없습니다.')
        }
    } catch (e) {
        consola.error(e)
    } finally {
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
