const Router = require('express').Router
const usersRouter = require('./users.router')
const answersRouter = require('./answers.router')
const testsRouter = require('./tests.router')
const router = new Router()

router.use('/users', usersRouter)
router.use('/tests', testsRouter)
router.use('/answers', answersRouter)
module.exports = router
