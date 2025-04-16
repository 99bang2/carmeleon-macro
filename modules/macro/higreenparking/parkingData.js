const parkingData = {
    /* ----------------------- higreenparking ----------------------- */
    /* - old - */
    2296: {
        filePath: "./higreenparking/parkingMacroOld",
        macroButtonMap: {
            321: 'input[type="button"]',               //우리빌딩 9시간권
        },

        selectorMap: [3, 2]//우리빌딩
    },

    2948: {
        filePath: "./higreenparking/parkingMacroOld",
        macroButtonMap: {
            318: 'input[id="BTN_종일(O2O)"]',          //타워8점 평일
            319: 'input[id="BTN_주말(O2O)"]',          //타워8점 주말
            320: 'input[id="BTN_심야(O2O)"]',          //타워8점 야간
        },

        selectorMap: [4, 3] //타워8점
    },

    8115: {
        filePath: "./higreenparking/parkingMacroOld",
        macroButtonMap: {
            322: 'input[id="BTN_24시간 할인(무료)"]',  //크리스탈빌딩점 평일
            323: 'input[id="BTN_24시간 할인(무료)"]',  //크리스탈빌딩점 주말
        },

        selectorMap: [5, 3] //크리스탈빌딩점
    },

    8118: {
        filePath: "./higreenparking/parkingMacroOld",
        macroButtonMap: {
            331: 'input[id="BTN_24시간할인권"]',       //고양점 평일
            332: 'input[id="BTN_24시간할인권"]',       //고양점 주말
        },
        selectorMap: [5, 3] //고양점
    },

    8119: {
        filePath: "./higreenparking/parkingMacroOld",
        macroButtonMap: {
            333: 'input[id="BTN_24시간할인권"]',       //영종도점 평일
            334: 'input[id="BTN_24시간할인권"]',       //영종도점 주말
            335: 'input[id="BTN_야간권"]',             //영종도점 야간
        },
        selectorMap: [5, 3] //영종도점
    },
    21008: {
        filePath: "./higreenparking/parkingMacroOld",
        macroButtonMap: {
            347: 'input[id="BTN_주말종일권"]' //마곡장흥빌딩점 주말
        },
        selectorMap: [5, 3]//마곡장흥빌딩점
    },

    21009: {
        filePath: "./higreenparking/parkingMacroOld",
        macroButtonMap: {
            348: 'input[id="BTN_주말종일권"]', //마곡사이언스타빌딩점 주말
            349: 'input[id="BTN_야간권"]', //마곡사이언스타빌딩점 야간
        },
        selectorMap: [5, 3]//마곡사이언스타빌딩점
    },

    1496: {
        filePath: "./higreenparking/parkingMacroOld",
        macroButtonMap: {
            350: 'input[id="BTN_평일종일권"]', //묵동자이1단지점 평일
            351: 'input[id="BTN_주말종일권"]', //묵동자이1단지점 주말
        },
        selectorMap: [5,3]//묵동자이1단지점
    },
    1505: {
        filePath: "./higreenparking/parkingMacroOld",
        macroButtonMap: {
            352: 'input[id="BTN_평일종일권"]', //묵동자이2단지점 평일
            353: 'input[id="BTN_주말종일권"]', //묵동자이2단지점 주말
        },
        selectorMap: [5,3]//묵동자이2단지점
    },

    21017: {
        filePath: "./higreenparking/parkingMacroOld",
        macroButtonMap: {
            375: 'input[id="BTN_종일권(O2O)"]',// 호수빌딩점 평일
            376: 'input[id="BTN_종일권(O2O)"]',// 호수빌딩점 주말
        },
        selectorMap:[5,3]
    },
    21210: {
        filePath: "./higreenparking/parkingMacroOld",
        macroButtonMap: {
            417: 'input[id="BTN_24시간 할인권"]',// 판교 메트로큐브점 평일
            418: 'input[id="BTN_24시간 할인권"]',// 판교 메트로큐브점 주말
            419: 'input[id="BTN_12시간 할인권"]',// 판교 메트로큐브점 야간
        },
        selectorMap:[5,3]
    },
    8105: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            278: '평일권_ONLINE',
            279: '주말권_ONLINE',
            280: '심야권_ONLINE',
        },
        searchText: '구월현대주차장점'
    },
    2451: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            281: '평일당일권(공유)',
            282: '야간권_ONLINE',
            283: '주말권_ONLINE',
            284: '주말권_ONLINE',
        },
        searchText: '정곡빌딩 서관점',
        parkingLotId: 829
    },
    4770: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            289: '평일종일권_(ONLINE)',
            290: '주말종일권_(ONLINE)',
            291: '야간권_(ONLINE)',
        },
        searchText: '검단농협점',
        parkingLotId: 637
    },
    6266: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            292: '주간권_(ONLINE)',
        },
        searchText: '유니클로 수원 망포점',
        parkingLotId: 723
    },
    6298: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            293: '종일권_(ONLINE)',
            294: '',
        },
        searchText: '영통동아점',
        parkingLotId: 51
    },
    3126: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            295: '평일당일권(공유)',
            296: '주말당일권(공유)',
        },
        searchText: '상봉점',
        parkingLotId: 15
    },
    8108: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            297: '평일당일권(공유)',
            298: '주말당일권(공유)',
            299: '평일3시간권(공유)',
        },
        searchText: 'DMC역점',
        parkingLotId: 480
    },
    8109: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            300: '평일당일권(공유)'
        },
        searchText: '하이센스빌점',
        parkingLotId: 744
    },
    6778: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            302: '주말당일권(공유)',
        },
        searchText: '신한은행 의정부점',
        parkingLotId: 642
    },
    8112: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            306: '평일당일권(공유앱)',
            307: '휴일당일권(공유앱)',
            308: '야간권(공유앱)',
            342: '평일3시간권(공유)',
            343: '주말3시간권(공유)'
        },
        searchText: '옥수어울림더리버점',
        parkingLotId: 77
    },
    8107: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            288: '야간권_(ONLINE)',
            309: '주말종일권_(ONLINE)',
        },
        parkingLotId: 13,
        searchText: '을지로3가 주차장'
    },
    8111: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            312: '평일당일권(공유)',
            313: '야간권(공유)',
        },
        searchText: '궐동피앤피점',
        parkingLotId: 148
    },
    8113: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            314: '평일당일권(공유)',
        },
        searchText: '운현프라자',
        parkingLotId: 813
    },
    8114: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            315: '평일당일권(공유)',
            316: '주말당일권(공유)',
            317: '야간권(공유)',
        },
        searchText: '공덕역점',
        parkingLotId: 412
    },
    2063: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            336: '평일당일권(공유)',
            337: '주말당일권(공유)',
            338: '야간권(공유)',
        },
        searchText: '테라운드빌딩점',
        parkingLotId: 155
    },
    8117: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            329: '평일당일권(공유)',
            330: '주말당일권(공유)',
        },
        searchText: '금촌역점',
        parkingLotId: 395
    },
    8116: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            326: '평일당일권(공유)',
            327: '주말당일권(공유)',
            328: '야간권(공유)',
        },
        searchText: 'NH농협은행 파주지부',
        parkingLotId: 560
    },
    5430: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            324: '평일당일권(공유)',
            323: '주말당일권(공유)',
        },
        searchText: '금강주차빌딩점',
        parkingLotId: 23
    },
    8120: {
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            339: '평일당일권(공유)',
            340: '주말당일권(공유)',
        },
        searchText: '노원하계점',
        parkingLotId: 501
    },
    19446: { //신촌E편한세상4단지점
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            341: '야간권(공유)'
        },
        searchText: '신촌E편한세상4단지점',
        parkingLotId: 486,
    },
    397: {//신사동ICT TOWER
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {
            346: '평일종일권_(ONLINE)'
        },
        searchText: '신사동ICT TOWER',
        parkingLotId: 542
    },
    21010:{//리더스퀘어마곡점
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {}
    },
    21011:{//매그넘797점
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {}
    },
    21012:{//M시그니처점
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {}
    },
    21013:{//스페이스k 서울미술관점
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {}
    },
    21014:{//벨로시티 오피스텔점
        filePath: "./higreenparking/parkingMacroNew",
        macroButtonMap: {}
    },
    21015:{//경기방송점
        filePath: "./higreenparking/parkingMacroNew",

    },
};

module.exports = parkingData;
