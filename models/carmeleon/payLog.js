'use strict'
module.exports = (sequelize, DataTypes) => {
    const payLog = sequelize.define('payLog', {
        uid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        payResultUid: {
            type: DataTypes.INTEGER
        },
        carNumber: {
            type: DataTypes.STRING
        },
        phoneNumber: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        reserveTime: {
            type: DataTypes.STRING
        },
        payType: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        price: {
            type: DataTypes.INTEGER
        },
        discountPrice: {
            type: DataTypes.INTEGER
        },
        totalPrice: {
            type: DataTypes.INTEGER
        },
        fee: {
            type: DataTypes.INTEGER
        },
        visible: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        userUid: {
            type: DataTypes.INTEGER
        },
        siteUid: {
            type: DataTypes.INTEGER
        },
        discountTicketUid: {
            type: DataTypes.INTEGER
        },
        cardUid: {
            type: DataTypes.INTEGER
        },
        rateUid: {
            type: DataTypes.INTEGER
        },
		payOid: {
			type: DataTypes.STRING
		},
		payTid: {
			type: DataTypes.STRING
		},
		activeStatus: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		expired: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		cancelStatus: {
			type: DataTypes.INTEGER,
			defaultValue: -1
		},
		cancelReason: {
        	type: DataTypes.STRING
		},
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true
    })

    payLog.associate = function (models) {
        payLog.belongsTo(models.discountTicket)
    }

    return payLog
}
