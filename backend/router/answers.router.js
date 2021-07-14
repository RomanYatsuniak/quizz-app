const Router = require('express').Router
const answersRouter = new Router()
const {Test, User, Question} = require('./../models/models')
const passport = require('passport')
answersRouter.post('/:answerId', (req, res) => {

})
answersRouter.get('/:testId',  async (req, res) => {

})

module.exports = answersRouter
