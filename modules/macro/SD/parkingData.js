const parkingData = {
    /* ----------------------- SD ----------------------- */
    2265: {
        // 2265.js 서울스퀘어
        filePath: "./SD/2265",
        macroButtonMap: {
            225: "#DropDownList_Discount > option", // 주말
        },
    },

    7967: {
        // 7967.js 예스에이피엠
        filePath: "./SD/7967",
        macroButtonMap: {
            226: "#DropDownList_Discount > option:nth-child(1)", // 평일
            227: "#DropDownList_Discount > option:nth-child(2)", // 주말
            228: "#DropDownList_Discount > option:nth-child(3)", // 야간
        },
    },

    7980: {
        // 7980.js V-PLEX
        filePath: "./SD/7980",
        macroButtonMap: {
            229: "HI48", // 평일
            230: "HI50", // 주말
            231: "HI49", // 야간
        },
    },
};

module.exports = parkingData;
