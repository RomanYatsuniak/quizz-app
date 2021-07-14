const Router = require('express').Router
const usersRouter = new Router()
const passport = require('passport')
const UsersController = require('./../controllers/users.controller')
usersRouter.post('/registration', UsersController.register)
usersRouter.post('/login', UsersController.login)
usersRouter.get('/refresh', passport.authenticate('jwt', {session: false}), UsersController.updateToken)
usersRouter.get('/activate/:link', UsersController.activateEmail)
usersRouter.get('/password', passport.authenticate('jwt', {session: false}), UsersController.passwordReset)

module.exports = usersRouter
