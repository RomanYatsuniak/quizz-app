const Sequelize = require('sequelize')
const db = require('./../db/index')
const CompletedTest = db.define('completedTest', {
    id: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    right: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    wrong: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
})




module.exports = CompletedTest

