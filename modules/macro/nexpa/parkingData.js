const parkingData = {
    /* ----------------------- nexpa ----------------------- */
    92: {
        // 92.js KAIT타워
        filePath: "./nexpa/92",
        macroButtonMap: {
            209: "#chk_info1", // 주말
            210: "#chk_info2", // 야간
        },
    },

    105: {
        // 105.js 키움저축나대지
        filePath: "./nexpa/105",
        macroButtonMap: {
            194: "#chk_info1", // 평일
            195: "#chk_info2", // 주말
        },
    },

    349: {
        // 349.js 강남푸르지오시티2차
        filePath: "./nexpa/349",
        macroButtonMap: {
            199: "#divAjaxFreeDiscount > div > div > button:nth-child(1)", // 평일
            200: "#divAjaxFreeDiscount > div > div > button:nth-child(1)", // 주말
        },
    },

    425: {
        // 425.js 호텔선샤인
        filePath: "./nexpa/425",
        macroButtonMap: {
            183: "#chk_info1", // 평일
            184: "#chk_info2", // 주말
            185: "#chk_info3", // 야간
        },
    },

    920: {
        // 920.js 삼성화재서비스빌딩
        filePath: "./nexpa/920",
        macroButtonMap: {
            190: "#chk_info1", // 평일
            191: "#chk_info2", // 주말
            274: "#chk_info3", // 야간
        },
    },

    999: {
        // 999.js 중앙로공영
        filePath: "./nexpa/999",
        macroButtonMap: {
            206: "#divAjaxFreeDiscount > div > div > button:nth-child(1)", // 평일
            207: "#divAjaxFreeDiscount > div > div > button:nth-child(3)", // 주말
            208: "#divAjaxFreeDiscount > div > div > button:nth-child(2)", // 야간
        },
    },

    2054: {
        // 2054.js 머큐어앰버서더홍대호텔
        filePath: "./nexpa/2054",
        macroButtonMap: {
            286: "#divAjaxFreeDiscount > div > div > button:nth-child(1)", // 평일
            287: "#divAjaxFreeDiscount > div > div > button:nth-child(1)", // 휴일
            //    #divAjaxFreeDiscount > div > div > button:nth-child(2) // 야간
        },
    },

    2225: {
        // 2225.js 동화빌딩
        filePath: "./nexpa/2225",
        macroButtonMap: {
            211: "#chk_info1", // 평일
            212: "#chk_info1", // 주말
            213: "#chk_info2", // 야간
            461: "#chk_info3", // 12시간권
        },
    },

    2278: {
        // 2278.js 밀레니엄서울힐튼
        filePath: "./nexpa/2278",
        macroButtonMap: {
            198: "#chk_info1", // 주말
        },
    },

    2324: {
        // 2324.js 서울시티타워
        filePath: "./nexpa/2324",
        macroButtonMap: {
            175: "#divAjaxFreeDiscount > div > div > button:nth-child(1)", // 평일
            176: "#divAjaxFreeDiscount > div > div > button:nth-child(2)", // 주말
            177: "#divAjaxFreeDiscount > div > div > button:nth-child(3)", // 야간
        },
    },

    2466: {
        // 2466.js 파크빌딩
        filePath: "./nexpa/2466",
        macroButtonMap: {
            203: "#divAjaxFreeDiscount > div > div > button:nth-child(1)", // 평일
            204: "#divAjaxFreeDiscount > div > div > button:nth-child(1)", // 주말
            205: "#divAjaxFreeDiscount > div > div > button:nth-child(2)", // 야간
        },
    },

    3365: {
        // 3365.js KT&G부산서면
        filePath: "./nexpa/3365",
        macroButtonMap: {
            214: "#divAjaxFreeDiscount > div > div > button:nth-child(1)", // 평일
            215: "#divAjaxFreeDiscount > div > div > button:nth-child(3)", // 주말
            216: "#divAjaxFreeDiscount > div > div > button:nth-child(2)", // 야간
        },
    },

    5434: {
        // 5434.js 우림로데오스위트
        filePath: "./nexpa/5434",
        macroButtonMap: {
            196: "#chk_info1", // 평일
            197: "#chk_info1", // 주말
        },
    },

    6041: {
        // 6041.js BS타워
        filePath: "./nexpa/6041",
        macroButtonMap: {
            244: "#chk_info1", // 주말
            245: "#chk_info2", // 야간
        },
    },

    7291: {
        // 7291.js 천안G스퀘어
        filePath: "./nexpa/7291",
        macroButtonMap: {
            186: "button.btn-primary", // 평일
            187: "button.btn-primary", // 주말
        },
    },

    7978: {
        // 7978.js 어반플레이스호텔
        filePath: "./nexpa/7978",
        macroButtonMap: {
            178: "#chk_info1", // 평일
            179: "#chk_info3", // 주말
            180: "#chk_info2", // 야간
        },
    },

    7983: {
        // 7983.js 경복궁
        filePath: "./nexpa/7983",
        macroButtonMap: {
            181: "#chk_info1", // 평일
            182: "#chk_info1", // 주말
        },
    },

    7987: {
        // 7987.js 어바니엘한강
        filePath: "./nexpa/7987",
        macroButtonMap: {
            192: "#chk_info1", // 평일
            193: "#chk_info1", // 주말
        },
    },

    8002: {
        // 8002.js 엠포리움
        filePath: "./nexpa/8002",
        macroButtonMap: {
            201: "button.btn-primary", // 평일
            202: "button.btn-primary", // 주말
        },
    },
};

module.exports = parkingData;
