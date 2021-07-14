const Router = require('express').Router
const testsRouter = new Router()
const TestController = require('./../controllers/tests.controller')
const passport = require('passport')
testsRouter.post('/', passport.authenticate('jwt', {session: false}), TestController.createTest)
testsRouter.get('/', passport.authenticate('jwt', {session: false}), TestController.getCompletedTestsByCurrentUser)
testsRouter.get('/:id', passport.authenticate('jwt', {session: false}), TestController.getTestById)
testsRouter.put('/:id', passport.authenticate('jwt', {session: false}), TestController.updateTest)
testsRouter.delete('/:id', passport.authenticate('jwt', {session: false}), TestController.deleteTestById)
testsRouter.get('/completed', passport.authenticate('jwt', {session: false}), TestController.getCompletedTestInfo)
testsRouter.get('/completed/:id', passport.authenticate('jwt', {session: false}), TestController.getCompletedTestsByCurrentUser)

module.exports = testsRouter
