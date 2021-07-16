const Router = require('express').Router
const testsRouter = new Router()
const TestController = require('./../controllers/tests.controller')
const passport = require('passport')
testsRouter.post('/', passport.authenticate('jwt', {session: false}), TestController.createTest)
testsRouter.get('/', passport.authenticate('jwt', {session: false}), TestController.getAllUserTests)
testsRouter.get('/:id', passport.authenticate('jwt', {session: false}), TestController.getUserTestById)
testsRouter.put('/:id', passport.authenticate('jwt', {session: false}), TestController.updateUserTestById)
testsRouter.delete('/:id', passport.authenticate('jwt', {session: false}), TestController.deleteUserTestById)
testsRouter.get('/completed', passport.authenticate('jwt', {session: false}), TestController.getUserCompletedTests)
testsRouter.get('/completed/:id', passport.authenticate('jwt', {session: false}), TestController.getUserCompletedTestById)

module.exports = testsRouter
