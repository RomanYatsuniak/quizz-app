const Router = require('express').Router
const usersRouter = new Router()
const passport = require('passport')
const User = require('./../models/User.model')
const Test = require('./../models/Test.model')
usersRouter.post('/registration', (req, res) => {
})
usersRouter.post('/login')
usersRouter.get('/refresh', async (req, res) => {

})
usersRouter.get('/activate/:link', )
usersRouter.get('/password', (req, res) => {

})

module.exports = usersRouter
