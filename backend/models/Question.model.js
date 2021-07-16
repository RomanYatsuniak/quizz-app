const Sequelize = require('sequelize')
const db = require('./../db/index')
const Question = db.define('question', {
    id: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.DataTypes.ENUM,
        values: [
            'checkbox',
            'radio',
            'input'
        ],
        allowNull: false
    },
    order: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
})



module.exports = Question
