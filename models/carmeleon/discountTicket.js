'use strict'
module.exports = (sequelize, DataTypes) => {
	const discountTicket = sequelize.define('discountTicket', {
		uid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		siteUid: {
			type: DataTypes.INTEGER,
		},
		ticketCategory: {
			type: DataTypes.INTEGER,
			defaultValue: 1
		},
		ticketType: {
			type: DataTypes.INTEGER,
		},
		ticketTime: {
			type: DataTypes.INTEGER,
		},
		ticketDayType: {
			type: DataTypes.INTEGER,
		},
		ticketPrice: {
			type: DataTypes.INTEGER,
		},
		ticketPriceDiscount: {
			type: DataTypes.INTEGER,
		},
		ticketPriceDiscountPercent: {
			type: DataTypes.INTEGER,
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		ticketStartDate: {
			type: DataTypes.DATE,
		},
		ticketEndDate: {
			type: DataTypes.DATE,
		},
		ticketCount: {
			type: DataTypes.INTEGER,
		},
		fee: {
			type: DataTypes.INTEGER
		},
		includeValet: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		parkingStartTime: {
			type: DataTypes.STRING
		},
		parkingEndTime: {
			type: DataTypes.STRING
		},
		sellingStartTime: {
			type: DataTypes.STRING
		},
		sellingEndTime: {
			type: DataTypes.STRING
		},
		parkingStartTimeHour: {
			type: DataTypes.VIRTUAL,
			get: function () {
				if (this.getDataValue('parkingStartTime') !== null) {
					return this.getDataValue('parkingStartTime').substr(0, 2)
				}else {
					return null
				}
			}
		},
		parkingStartTimeMinute: {
			type: DataTypes.VIRTUAL,
			get: function () {
				if (this.getDataValue('parkingStartTime') !== null) {
					return this.getDataValue('parkingStartTime').substr(2, 2)
				}else {
					return null
				}
			}
		},
		parkingEndTimeHour: {
			type: DataTypes.VIRTUAL,
			get: function () {
				if (this.getDataValue('parkingEndTime') !== null) {
					return this.getDataValue('parkingEndTime').substr(0, 2)
				}else {
					return null
				}
			}
		},
		parkingEndTimeMinute: {
			type: DataTypes.VIRTUAL,
			get: function () {
				if (this.getDataValue('parkingEndTime') !== null) {
					return this.getDataValue('parkingEndTime').substr(2, 2)
				}else {
					return null
				}
			}
		},
	}, {
		timestamps: true,
		underscored: true,
		paranoid: true
	})
	return discountTicket
}
