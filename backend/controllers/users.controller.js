const UserService = require('./../services/user.service')
const TokenService = require('./../services/token.service')
class UsersController {
    async register(req, res) {
        const {email, password} = req.body
        const newUser = await UserService.createUser(email, password)
        res.status(201)
        res.send({...newUser})
    }

    async login(req, res) {
        const {email, password} = req.body
        const user = await UserService.loginUser(email, password)
        res.send({...user})
    }

    async updateToken(req, res) {
        const newToken = UserService.updateToken(req.user)
        res.send({id: req.user.id, token: newToken})
    }

    async activateEmail(req, res) {
        await UserService.activateUser(req.params.link)
        res.json({message: 'Account was activated'})
    }

    async passwordReset(req, res) {
        await UserService.resetUserPassword(req.user.id)
        res.json({message: 'New password was send to your email'})
    }
}

module.exports = new UsersController()
