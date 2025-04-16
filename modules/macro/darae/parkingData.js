const parkingData = {
    /* ----------------------- darea ----------------------- */

    /* -- asan -- */
    7999: {
        // 7999.js Y시티몰(아산)
        filePath: "./darae/asan/7999",
        macroButtonMap: {
            159: 'input[value="mobilx"]',
            160: 'input[value="mobilx(주말)"]',
            344: 'input[value="mobilx"]',
            345: 'input[value="mobilx"]'
        },
        repeatCount: {
            159: 1,
            160: 1,
            344: 2,
            345: 3
        }
    },

    /* -- bucheon -- */
    4748: {
        // 4748.js 디아뜨갤러리2차
        filePath: "./darae/bucheon/4748",
        macroButtonMap: {
            173: 'input[value="mobilx"]',
            174: 'input[value="mobilx"]',
            273: 'input[value="mobilx(야간)"]',
        },
    },

    4749: {
        // 4749.js 디아뜨갤러리1차
        filePath: "./darae/bucheon/4749",
        macroButtonMap: {
            171: 'input[value="mobilx"]', //평일
            172: 'input[value="mobilx"]', //주말
            262: 'input[value="mobilx(야간)"]', //야간
        },
    },

    /* -- bundang -- */
    6038: {
        // 6038.js 서현빌딩
        filePath: "./darae/bundang/6038",
        macroButtonMap: {
            14: 'input[value="mobilx(주말)"]',
            13: 'input[value="mobilx(야간)"]',
            445: 'input[value="10시간할인"]'
        },
    },

    7982: {
        // 7982.js 알파리움타워
        filePath: "./darae/bundang/7982",
        macroButtonMap: {
            15: 'input[value="mobilx"]',
            16: 'input[value="mobilx(야간)"]',
        },
    },

    7990: {
        // 7990.js 알파돔타워
        filePath: "./darae/bundang/7990",
        macroButtonMap: {
            17: 'input[value="mobilx"]',
            18: 'input[value="mobilx(야간)"]',
            19: 'input[value="mobilx(주말)"]',
        },
    },

    /* -- busan -- */
    3382: {
        // 3382.js 사학연금부산회관
        filePath: "./darae/busan/3382",
        macroButtonMap: {
            155: 'input[value="mobilx"]',
            156: 'input[value="mobilx(주말)"]',
        },
    },

    7974: {
        // 7974.js 신라스테이해운대
        filePath: "./darae/busan/7974",
        macroButtonMap: {
            151: 'input[value="mobilx"]',
            152: 'input[value="mobilx(주말)"]',
        },
    },

    /* -- gwangmyung -- */
    8001: {
        // 8001.js nh농협은행광명시지부
        filePath: "./darae/gwangmyung/8001",
        macroButtonMap: {
            163: 'input[value="mobilx"]',
            164: 'input[value="mobilx(주말)"]',
            165: 'input[value="mobilx(야간)"]',
        },
    },

    /* -- incheon -- */
    4841: {
        // 4841.js 베스트웨스턴인천공항
        filePath: "./darae/incheon/4841",
        macroButtonMap: {
            153: 'input[value="mobilx"]',
            154: 'input[value="mobilx(주말)"]',
        },
    },

    /* -- pyungtaek -- */
    7973: {
        // 7973.js 평택TS-one
        filePath: "./darae/pyungtaek/7973",
        macroButtonMap: {
            149: 'input[value="mobilx"]',
            150: 'input[value="mobilx(주말)"]',
        },
    },

    /* -- seoul -- */
    /* - etc - */
    992: {
        // 992.js K스퀘어(사당교보타워빌딩)
        filePath: "./darae/seoul/etc/992",
        macroButtonMap: {
            139: 'input[value="mobilx"]',
            140: 'input[value="mobilx(주말)"]',
        },
    },

    1689: {
        // 1689.js W스퀘어
        filePath: "./darae/seoul/etc/1689",
        macroButtonMap: {
            141: 'input[value="mobilx"]',
            142: 'input[value="mobilx(주말)"]',
            143: 'input[value="mobilx(야간)"]',
        },
    },

    7975: {
        // 7975.js 구의웰츠타워
        filePath: "./darae/seoul/etc/7975",
        macroButtonMap: {
            132: 'input[value="mobilx"]',
            133: 'input[value="mobilx(주말)"]',
            134: 'input[value="mobilx(야간)"]',
        },
    },

    7989: {
        // 7989.js 원메디타운
        filePath: "./darae/seoul/etc/7989",
        macroButtonMap: {
            135: 'input[value="mobilx"]',
            136: 'input[value="mobilx(주말)"]',
        },
    },

    7994: {
        // 7994.js 힐스테이트에코마곡나루역
        filePath: "./darae/seoul/etc/7994",
        macroButtonMap: {
            137: 'input[value="mobilx"]',
            138: 'input[value="mobilx(주말)"]',
        },
    },

    7996: {
        // 7996.js 에코테라스
        filePath: "./darae/seoul/etc/7996",
        macroButtonMap: {
            144: 'input[value="mobilx"]',
            145: 'input[value="mobilx(주말)"]',
            275: 'input[value="mobilx(야간)"]',
        },
    },

    /* - gangnam - */
    35: {
        // 35.js 아크플레이스
        filePath: "./darae/seoul/gangnam/35",
        macroButtonMap: {
            71: 'input[value="mobilx"]',
            72: 'input[value="mobilx(주말)"]',
            73: 'input[value="mobilx(야간)"]',
        },
    },

    46: {
        // 46.js 위워크타워
        filePath: "./darae/seoul/gangnam/46",
        macroButtonMap: {
            77: 'input[value="mobilx"]',
            78: 'input[value="mobilx(주말)"]',
            79: 'input[value="mobilx(야간)"]',
            // 292:'input[value="mobilx(주말24시간)"]',
            // 293:'input[value="mobilx(주말48시간)"]'
        },
    },

    71: {
        // 71.js 오렌지라이프타워
        filePath: "./darae/seoul/gangnam/71",
        macroButtonMap: {
            80: 'input[value="mobilx"]',
            81: 'input[value="mobilx(주말)"]',
            82: 'input[value="mobilx(야간)"]',
        },
    },

    72: {
        // 72.js L7호텔강남
        filePath: "./darae/seoul/gangnam/72",
        macroButtonMap: {
            65: 'input[value="mobilx"]',
            66: 'input[value="mobilx(주말)"]',
            67: 'input[value="mobilx(야간)"]',
        },
    },

    117: {
        // 117.js Icon-Yeoksam
        filePath: "./darae/seoul/gangnam/117",
        macroButtonMap: {
            86: 'input[value="mobilx"]',
            87: 'input[value="mobilx(주말)"]',
            88: 'input[value="mobilx(야간)"]',
        },
    },

    148: {
        // 148.js HD인텔렉스빌딩
        filePath: "./darae/seoul/gangnam/148",
        macroButtonMap: {
            74: 'input[value="mobilx"]',
            75: 'input[value="mobilx(주말)"]',
            76: 'input[value="mobilx(야간)"]',
        },
    },

    200: {
        // 200.js KT&G대치
        filePath: "./darae/seoul/gangnam/200",
        macroButtonMap: {
            83: 'input[value="mobilx"]',
            84: 'input[value="mobilx(주말)"]',
            85: 'input[value="mobilx(야간)"]',
        },
    },

    201: {
        // 201.js EG빌딩
        filePath: "./darae/seoul/gangnam/201",
        macroButtonMap: {
            68: 'input[value="mobilx"]',
            69: 'input[value="mobilx(주말)"]',
            70: 'input[value="mobilx(야간)"]',
        },
    },

    8072: {
        // 8072.js 역삼우정에쉐르2차
        filePath: "./darae/seoul/gangnam/8072",
        macroButtonMap: { 89: 'input[value="mobilx"]' },
    },

    /* - jongro - */
    2338: {
        // 2338.js D타워
        filePath: "./darae/seoul/jongro/2338",
        macroButtonMap: {
            115: 'input[value="mobilx"]',
            116: 'input[value="mobilx(주말)"]',
            117: 'input[value="mobilx(야간)"]',
        },
    },

    2938: {
        // 2938.js 수송스퀘어
        filePath: "./darae/seoul/jongro/2938",
        macroButtonMap: {
            118: 'input[value="mobilx"]',
            119: 'input[value="mobilx(주말)"]',
            120: 'input[value="mobilx(야간)"]',
        },
    },

    2942: {
        // 2942.js 오라카이인사동
        filePath: "./darae/seoul/jongro/2942",
        macroButtonMap: {
            217: 'input[value="mobilx"]',
            218: 'input[value="mobilx(주말)"]',
            219: 'input[value="mobilx(야간)"]',
        },
    },

    2950: {
        // 2950.js SC제일은행본점
        filePath: "./darae/seoul/jongro/2950",
        macroButtonMap: {
            112: 'input[value="mobilx"]',
            113: 'input[value="mobilx(주말)"]',
            114: 'input[value="mobilx(야간)"]',
        },
    },

    /* - junggu - */
    1939: {
        // 1939.js 센트럴플레이스
        filePath: "./darae/seoul/junggu/1939",
        macroButtonMap: {
            50: 'input[value="mobilx"]',
            51: 'input[value="mobilx(주말)"]',
            52: 'input[value="mobilx(야간)"]',
            446:'input[value="mobilx(3시간)"]',
        },
    },

    1940: {
        // 1940.js AIA타워
        filePath: "./darae/seoul/junggu/1940",
        macroButtonMap: {
            20: 'input[value="mobilx"]',
            21: 'input[value="mobilx(주말)"]',
            460: 'input[value="12시간권"]',
        },
    },

    1957: {
        // 1957.js 센트럴타워
        filePath: "./darae/seoul/junggu/1957",
        macroButtonMap: {
            59: 'input[value="mobilx"]',
            60: 'input[value="mobilx(주말)"]',
            61: 'input[value="mobilx(야간)"]'
        },
    },

    1963: {
        // 1963.js HSBC빌딩
        filePath: "./darae/seoul/junggu/1963",
        macroButtonMap: {
            25: 'input[value="mobilx"]',
            26: 'input[value="mobilx(주말)"]',
            458: 'input[value="12시간권"]',
        },
    },

    1966: {
        // 1966.js 오렌지센터
        filePath: "./darae/seoul/junggu/1966",
        macroButtonMap: {
            41: 'input[value="mobilx"]',
            42: 'input[value="mobilx(주말)"]',
            43: 'input[value="mobilx(야간)"]',
            459: 'input[value="12시간권"]',
        },
    },

    1988: {
        // 1988.js 브라운스톤서울
        filePath: "./darae/seoul/junggu/1988",
        macroButtonMap: {
            36: 'input[value="mobilx"]',
            //37:'input[value="mobilx(주말)"]'
            //20201215 주말권 없음(정종현)
        },
    },

    2291: {
        // 2291.js 서소문한화빌딩
        filePath: "./darae/seoul/junggu/2291",
        macroButtonMap: {
            27: 'input[value="mobilx"]',
            28: 'input[value="mobilx(주말)"]',
            29: 'input[value="mobilx(야간)"]',
        },
    },

    2331: {
        // 2331.js 태평로빌딩
        filePath: "./darae/seoul/junggu/2331",
        macroButtonMap: {
            62: 'input[value="mobilx"]',
            63: 'input[value="mobilx(주말)"]',
            64: 'input[value="mobilx(야간)"]',
        },
    },

    2806: {
        // 2806.js 우리금융남산타워
        filePath: "./darae/seoul/junggu/2806",
        macroButtonMap: {
            22: 'input[value="mobilx"]',
            23: 'input[value="mobilx(주말)"]',
            24: 'input[value="mobilx(야간)"]',
        },
    },

    2881: {
        // 2881.js 남산스퀘어
        filePath: "./darae/seoul/junggu/2881",
        macroButtonMap: {
            53: 'input[value="mobilx"]',
            54: 'input[value="mobilx(주말)"]',
            55: 'input[value="mobilx(야간)"]',
        },
    },

    3004: {
        // 3004.js 시그니쳐타워
        filePath: "./darae/seoul/junggu/3004",
        macroButtonMap: {
            30: 'input[value="mobilx"]',
            31: 'input[value="mobilx(주말)"]',
            32: 'input[value="mobilx(야간)"]',
        },
    },

    3010: {
        // 3010.js 센터플레이스
        filePath: "./darae/seoul/junggu/3010",
        macroButtonMap: {
            56: 'input[value="mobilx"]',
            57: 'input[value="mobilx(주말)"]',
            58: 'input[value="mobilx(야간)"]',
            // 44:'input[value="mobilx(주말24시간)"]',
            // 11:'input[value="mobilx(주말48시간)"]'
        },
    },

    3035: {
        // 3035.js 패스트파이브타워
        filePath: "./darae/seoul/junggu/3035",
        macroButtonMap: {
            33: 'input[value="mobilx"]',
            34: 'input[value="mobilx(주말)"]',
            35: 'input[value="mobilx(야간)"]',
        },
    },

    3062: {
        // 3062.js 을지트윈타워
        filePath: "./darae/seoul/junggu/3062",
        macroButtonMap: {
            38: 'input[value="mobilx"]',
            39: 'input[value="mobilx(주말)"]',
            40: 'input[value="mobilx(야간)"]',
            303: 'input[value="모빌엑스(5시간)"]',
            304: 'input[value="모빌엑스(3시간)"]',
        },
    },

    7993: {
        // 7993.js 코리아나호텔
        filePath: "./darae/seoul/junggu/7993",
        macroButtonMap: {
            44: 'input[value="mobilx"]',
            45: 'input[value="mobilx(주말)"]',
            46: 'input[value="mobilx(야간)"]',
        },
    },

    7995: {
        // 7995.js 그랜드센트럴타워
        filePath: "./darae/seoul/junggu/7995",
        macroButtonMap: {
            47: 'input[value="mobilx"]',
            48: 'input[value="mobilx(주말)"]',
            49: 'input[value="mobilx(야간)"]',
        },
    },

    /* - seocho - */
    252: {
        // 252.js 플래티넘타워
        filePath: "./darae/seoul/seocho/252",
        macroButtonMap: {
            106: 'input[value="mobilx"]',
            107: 'input[value="mobilx(주말)"]',
            108: 'input[value="mobilx(야간)"]',
            // 111:'input[value="mobilx(주말2일권)"]'
        },
    },

    284: {
        // 284.js 강남빌딩
        filePath: "./darae/seoul/seocho/284",
        macroButtonMap: {
            109: 'input[value="mobilx"]',
            110: 'input[value="mobilx(주말)"]',
            111: 'input[value="mobilx(야간)"]',
        },
    },

    7966: {
        // 7966.js W타워
        filePath: "./darae/seoul/seocho/7966",
        macroButtonMap: {
            103: 'input[value="mobilx"]',
            104: 'input[value="mobilx(주말)"]',
            105: 'input[value="mobilx(야간)"]',
        },
    },

    7985: {
        // 7985.js 부띠크모나코
        filePath: "./darae/seoul/seocho/7985",
        macroButtonMap: {
            100: 'input[value="mobilx"]',
            101: 'input[value="mobilx(주말)"]',
            102: 'input[value="mobilx(야간)"]',
        },
    },

    8106: {
        // 8106.js 무궁화공영
        filePath: "./darae/seoul/seocho/8106",
        macroButtonMap: { 285: 'input[value="mobilx"]' },
    },

    /* - seodaemun - */
    2232: {
        // 2232.js NH농협생명빌딩
        filePath: "./darae/seoul/seodaemun/2232",
        macroButtonMap: {
            121: 'input[value="mobilx"]',
            122: 'input[value="mobilx(주말)"]',
            123: 'input[value="mobilx(야간)"]',
        },
    },

    2233: {
        // 2233.js KT&G서대문
        filePath: "./darae/seoul/seodaemun/2233",
        macroButtonMap: {
            124: 'input[value="mobilx"]',
            125: 'input[value="mobilx(주말)"]',
            372: 'input[value="mobilx(야간)"]'
        },
    },

    /* - songpa - */
    379: {
        // 379.js 문정프라자
        filePath: "./darae/seoul/songpa/379",
        macroButtonMap: {
            129: 'input[value="mobilx"]',
            130: 'input[value="mobilx(주말)"]',
            131: 'input[value="mobilx(야간)"]',
        },
    },
    7977: {
        // 7977.js 제일오피스텔
        filePath: "./darae/seoul/songpa/7977",
        macroButtonMap: {
            126: 'input[value="mobilx"]',
            127: 'input[value="mobilx(주말)"]',
            128: 'input[value="mobilx(야간)"]',
        },
    },

    /* - yeongdeungpo - */
    1785: {
        // 1785.js 오투타워
        filePath: "./darae/seoul/yeongdeungpo/1785",
        macroButtonMap: {
            97: 'input[value="mobilx"]',
            98: 'input[value="mobilx(주말)"]',
            99: 'input[value="mobilx(야간)"]',
        },
    },

    1795: {
        // 1795.js KTB빌딩
        filePath: "./darae/seoul/yeongdeungpo/1795",
        macroButtonMap: {
            95: 'input[value="mobilx(주말)"]',
            96: 'input[value="mobilx(야간)"]',
            371:'input[value="mobilx(종일)"]'
        },
    },

    1805: {
        // 1805.js 여의도리버타워
        filePath: "./darae/seoul/yeongdeungpo/1805",
        macroButtonMap: {
            91: 'input[value="mobilx(주말)"]',
            92: 'input[value="mobilx(야간)"]',
        },
    },

    1806: {
        // 1806.js 씨티플라자
        filePath: "./darae/seoul/yeongdeungpo/1806",
        macroButtonMap: { 90: 'input[value="mobilx(주말)"]' },
    },

    7992: {
        // 7992.js 메리츠화재여의도사옥
        filePath: "./darae/seoul/yeongdeungpo/7992",
        macroButtonMap: {
            93: 'input[value="mobilx"]',
            94: 'input[value="mobilx(주말)"]',
        },
    },

    /* -- suwon -- */
    6211: {
        // 6211.js 수원메쎄
        filePath: "./darae/suwon/6211",
        macroButtonMap: {
            147: 'input[value="mobilx"]',
            148: 'input[value="mobilx(주말)"]',
        },
    },

    6235: {
        // 6235.js KT&G수원
        filePath: "./darae/suwon/6235",
        macroButtonMap: { 146: 'input[value="mobilx(주말)"]' },
    },

    /* -- uijeongbu -- */
    6781: {
        // 6781.js NH농협은행의정부역지점
        filePath: "./darae/uijeongbu/6781",
        macroButtonMap: {
            161: 'input[value="mobilx"]',
            162: 'input[value="mobilx(주말)"]',
            235: 'input[value="mobilx"]',
        },
    },
};

module.exports = parkingData;
