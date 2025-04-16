const HUMAXPARCS_FILEPATH = "./humax-parcs/parkingMacro"
const HUMAXPARCS_SINGLEBUTTON = "#sc-page-content > div > div.uk-width-2-3\\@l > div > div.uk-card-body > div > div.uk-width-1-2\\@l.uk-first-column > div.uk-margin-mini-top.uk-grid-small > div > div > div"
const HUMAXPARCS_FIRSTBUTTON = "#sc-page-content > div > div.uk-width-2-3\\@l > div > div.uk-card-body > div > div.uk-width-1-2\\@l.uk-first-column > div.uk-margin-mini-top.uk-grid-small > div > div > div.uk-margin-small-top.uk-first-column"
const HUMAXPARCS_SECONDBUTTON ="#sc-page-content > div > div.uk-width-2-3\\@l > div > div.uk-card-body > div > div.uk-width-1-2\\@l.uk-first-column > div.uk-margin-mini-top.uk-grid-small > div > div > div:nth-child(2)"
const HUMAXPARCS_THIRDBUTTON="#sc-page-content > div > div.uk-width-2-3\\@l > div > div.uk-card-body > div > div.uk-width-1-2\\@l.uk-first-column > div.uk-margin-mini-top.uk-grid-small > div > div > div:nth-child(3)"
const parkingData = {
    /* ----------------------- humax-parcs ----------------------- */
    262: {
        // 262.js 한국지식재산센터
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            259: HUMAXPARCS_FIRSTBUTTON, //평일
            260: HUMAXPARCS_SECONDBUTTON, //주말
            261: HUMAXPARCS_THIRDBUTTON, //야간
        },
    },

    1058: {
        // 1058.js 보라매공원
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            251: HUMAXPARCS_SINGLEBUTTON, //평일
        },
    },

    1855: {
        // 1855.js 나라키움여의도
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            252: HUMAXPARCS_FIRSTBUTTON, //평일
            253: HUMAXPARCS_SECONDBUTTON, //주말
            254: HUMAXPARCS_THIRDBUTTON, //야간
        },
    },

    2220: {
        // 2220.js 순화빌딩
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            222: HUMAXPARCS_SINGLEBUTTON,
            223: HUMAXPARCS_SINGLEBUTTON,
            224: HUMAXPARCS_SINGLEBUTTON,
        },
    },

    3038: {
        // 3038.js 국제빌딩
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            310: HUMAXPARCS_SINGLEBUTTON, //평일
            311: HUMAXPARCS_SINGLEBUTTON, //주말
        },
    },

    5986: {
        // 5986.js 휴맥스빌리지
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            7: HUMAXPARCS_FIRSTBUTTON, //평일
            8: HUMAXPARCS_FIRSTBUTTON, //주말
            247: HUMAXPARCS_SECONDBUTTON, //야간
        },
    },
    7956: {
        // 7956.js 평촌칼라힐
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            166: HUMAXPARCS_SINGLEBUTTON,//평일
            167: HUMAXPARCS_SINGLEBUTTON,//주말
        },
    },
    7984: {
        // 7984.js 웨스턴853오피스텔
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            234: HUMAXPARCS_FIRSTBUTTON, //평일
            248: HUMAXPARCS_FIRSTBUTTON, //주말
            276: HUMAXPARCS_SECONDBUTTON, //야간
        },
    },

    7988: {
        // 7988.js 양우드라마시티
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            157: HUMAXPARCS_FIRSTBUTTON, //평일
            158: HUMAXPARCS_SECONDBUTTON, //주말
        },
    },

    8100: {
        // 8100.js 공덕푸르지오
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            249:HUMAXPARCS_FIRSTBUTTON, //평일
            250:HUMAXPARCS_SECONDBUTTON, //주말
        },
    },

    8103: {
        // 8103.js T타워
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            255: HUMAXPARCS_FIRSTBUTTON , //평일
            257: HUMAXPARCS_SECONDBUTTON , //주말
            256: HUMAXPARCS_THIRDBUTTON , //야간
        },
    },

    6446: {
        // 6446.js AW컨벤션
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            168:HUMAXPARCS_SINGLEBUTTON,
            169:HUMAXPARCS_SINGLEBUTTON
        },
    },

    6487: {
        // 6487.js AW주차타워
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            170:HUMAXPARCS_SINGLEBUTTON
        },
    },

    21230: {
        // 21230.js 역삼우정에쉐르3차
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            429:HUMAXPARCS_SINGLEBUTTON
        },
    },
    4528: {
        // 4528.js 홈플러스 인천논현점
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            447: HUMAXPARCS_SINGLEBUTTON
        }
    },
    1946: {
        // 1946.js 봉래빌딩
        filePath: HUMAXPARCS_FILEPATH,
        macroButtonMap: {
            451:HUMAXPARCS_FIRSTBUTTON,
            452:HUMAXPARCS_THIRDBUTTON
        }
    }
};

module.exports = parkingData;
