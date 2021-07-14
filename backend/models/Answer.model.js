const Sequelize = require('sequelize')
const db = require('./../db/index')
const Answer = db.define('answer', {
    id: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    value: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    correct: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
    }
})





module.exports = Answer
