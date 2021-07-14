const Router = require('express').Router
const answersRouter = new Router()
const {Test, User, Question} = require('./../models/models')
const passport = require('passport')
answersRouter.post('/:answerId')
answersRouter.get('/:testId')

module.exports = answersRouter
