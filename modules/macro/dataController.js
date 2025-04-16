const amano = require("./amano/parkingData");
const darae = require("./darae/parkingData");
const higreenParking = require("./higreenparking/parkingData");
const hiparking_sd = require("./hiparking-sd/parkingData");
const humax_parcs = require("./humax-parcs/parkingData");
const i_parking = require("./i-parking/parkingData");
const nexpa = require("./nexpa/parkingData");
const sd = require("./SD/parkingData");
const tis = require("./TIS/parkingData");

const parkingData = {
    ...amano,
    ...darae,
    ...higreenParking,
    ...hiparking_sd,
    ...humax_parcs,
    ...i_parking,
    ...nexpa,
    ...sd,
    ...tis,
};

module.exports = parkingData;
