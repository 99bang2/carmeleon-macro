'use strict'

module.exports = (sequelize, DataTypes) => {

    const api = sequelize.define('macroUrl', {
        uid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        parkingSiteName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        parkingSiteUid: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        parkingSiteId: {
            type: DataTypes.STRING,
        },
        parkingSitePassword: {
            type: DataTypes.STRING,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        timestamps: true,
        paranoid: true,
        underscored: true
    })


    return api
}
