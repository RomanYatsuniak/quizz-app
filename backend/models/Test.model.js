const Sequelize = require('sequelize')
const db = require('./../db/index')
const Test = db.define('test', {
    id: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
    }
})




module.exports = Test

