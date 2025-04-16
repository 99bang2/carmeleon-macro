'use strict'
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const sequelizeConfig = require(__dirname + '/../configs/sequelize.json')[env]
let db = {}
const databases = Object.keys(sequelizeConfig);

for(let i = 0 ;  i< databases.length; ++i) {
    let database = databases[i];
    let dbPath = sequelizeConfig[database];
    console.log('database : ', database)
    db[database] = new Sequelize(dbPath.database, dbPath.username, dbPath.password, dbPath)
}
// let sequelize
// if (sequelizeConfig.use_env_variable) {
//     sequelize = new Sequelize(process.env[config.use_env_variable], config)
// } else {
//     sequelize = new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, sequelizeConfig)
// }

fs
    .readdirSync(__dirname + '/carmeleon')
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach(file => {
        // const model = db.carmeleon['import'](path.join(__dirname + '/carmeleon', file))
        const model = require(path.join(__dirname + '/carmeleon', file))(db.carmeleon, Sequelize.DataTypes)
        db.carmeleon[model.name] = model
    })

fs
    .readdirSync(__dirname + '/healthcheck')
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach(file => {
        // const model = db.healthcheck['import'](path.join(__dirname + '/healthcheck', file))
        const model = require(path.join(__dirname + '/healthcheck', file))(db.healthcheck, Sequelize.DataTypes)
        db.healthcheck[model.name] = model
    })

Object.keys(db.carmeleon).forEach(modelName => {
    if(db.carmeleon[modelName].associate) {
        db.carmeleon[modelName].associate(db.carmeleon)
    }
})
Object.keys(db.healthcheck).forEach(modelName => {
    if(db.healthcheck[modelName].associate) {
        db.healthcheck[modelName].associate(db.healthcheck)
    }
})

Object.keys(db.carmeleon).forEach(modelName => {
    if (db.carmeleon[modelName].applyScope) {
        db.carmeleon[modelName].applyScope(db.carmeleon)
    }
})
Object.keys(db.healthcheck).forEach(modelName => {
    if (db.healthcheck[modelName].applyScope) {
        db.healthcheck[modelName].applyScope(db.healthcheck)
    }
})

db.carmeleon = db['carmeleon']
db.healthcheck = db['healthcheck']
db.Sequelize = Sequelize

module.exports = db;
