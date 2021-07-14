const User = require('./../models/User.model')
const TokenService = require('./token.service')
const {v4: uuidv4} = require('uuid')
const generator = require('generate-password');
const bcrypt = require('bcrypt')
const sendMail = require('./email.service')
class UserService {
    async createUser(email, password) {
        const userAlreadyExist = await User.findOne({ where: {email}})
        if (userAlreadyExist) {
            throw new Error('User already exist')
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = {
            id: uuidv4(),
            email,
            password: hashedPassword,
            is_activated: false,
            activation_link: uuidv4()
        }
        const user = await User.create(newUser)
        const newToken = TokenService.generateToken({id: newUser.id})
        sendMail(user.email, 'activation-link', `Hi, this is your activation link - http://localhost:3000/api/users/activate/${user.activation_link}`)
        return {
            id: user.dataValues.id,
            token: newToken
        }
    }

    async loginUser(email, password) {
        const user = await User.findOne({where: {email}})
        if (user) {
            console.log(password)
            const correctPassword = await bcrypt.compare(password, user.password)
            if (correctPassword) {
                if (user.is_activated) {
                    const token = TokenService.generateToken({id: user.id})
                    return {
                        id: user.id,
                        token
                    }
                }
                throw new Error('Not activated account')
            }
        }
        throw new Error('No such user')
    }

    async resetUserPassword(userId) {
        const newPassword = generator.generate({
            length: 8,
            number: true
        })
        const hashedPassword = await bcrypt.hash(newPassword, 10)
        await User.update({password: hashedPassword}, {where: {id: userId}})
        const user = await User.findOne({where: {id: userId}})
        sendMail(user.email, 'reset', `Hi, this is your new password - ${newPassword}`)
    }

    async activateUser(link) {
        const user = await User.findOne({where: {activation_link: link}})
        if (user) {
            await User.update({is_activated: true}, {where: {id: user.id}})
        } else {
            throw new Error('There is no such user')
        }

    }

    async updateToken(user) {
        const token = TokenService.updateToken(user.token)
        return token
    }
}

module.exports = new UserService()
