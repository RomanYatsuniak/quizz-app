const Router = require('express').Router
const usersRouter = new Router()
const passport = require('passport')
const User = require('./../models/User.model')
const Test = require('./../models/Test.model')
usersRouter.post('/registration')
usersRouter.post('/login')
usersRouter.get('/refresh')
usersRouter.get('/activate/:link')
usersRouter.get('/password')

module.exports = usersRouter
