const Sequelize = require('sequelize')
const db = require('./../db/index')
const UserAnswers = db.define('userAnswers', {
    id: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    value: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
})


module.exports = UserAnswers
