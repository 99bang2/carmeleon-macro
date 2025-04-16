const parkingData = {
    /* ----------------------- amano ----------------------- */
    854: {
        // 854.js 동익드미라벨
        filePath: "./amano/854",
        macroButtonMap: {
            238: ['a[value="모빌엑스"]', 1], // 평일
            239: ['a[value="모빌엑스"]', 1], // 주말
            269: ['a[value="모빌엑스"]', 2], // 2일권
            270: ['a[value="모빌엑스"]', 3], // 3일권
            271: ['a[value="모빌엑스"]', 4], // 4일권
            272: ['a[value="모빌엑스"]', 5], // 5일권
        },
    },

    921: {
        // 921.js 어바니엘염창
        filePath: "./amano/921",
        macroButtonMap: {
            240: "#\\31 4", // 평일
            241: "#\\31 4", // 주말
        },
    },

    2226: {
        // 2226.js 정안빌딩
        filePath: "./amano/2226",
        macroButtonMap: {
            242: "#\\31 8", // 평일
            243: "#\\31 8", // 주말
        },
    },

    2378: {
        // 2378.js 서울기록원
        filePath: "./amano/2378",
        macroButtonMap: {
            236: "#\\31 1", // 평일
            237: "#\\31 2", // 야간
        },
    },

    2419: {
        // 2419.js 교대역동측공영주차장
        filePath: "./amano/2419",
        macroButtonMap: {
            258: "#\\34 ", // 평일
            277: "#\\34 ", // 주말
        },
    },
};

module.exports = parkingData;
