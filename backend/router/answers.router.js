const Router = require('express').Router
const answersRouter = new Router()
const passport = require('passport')
const {Test, User, Question} = require('./../models/models')
const AnswersController = require('./../controllers/answers.controller')
answersRouter.post('/:answerId', passport.authenticate('jwt', {session: false}), AnswersController.setAnswer)
answersRouter.get('/:testId', passport.authenticate('jwt', {session: false}), AnswersController.getAllAnswersByTestId)

module.exports = answersRouter
