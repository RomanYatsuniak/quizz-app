const Sequelize = require('sequelize')
const db = require('./../db/index')
const User = db.define('user', {
    id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    is_activated: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
    },
    activation_link: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User
