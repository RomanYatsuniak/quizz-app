const Router = require('express').Router
const testsRouter = new Router()
testsRouter.post('/tests')
testsRouter.get('/test')
testsRouter.get('/tests/:id')
testsRouter.put('/tests')
testsRouter.delete('/tests/:id')
testsRouter.get('/tests/completed')
testsRouter.get('/tests/completed/:id')

module.exports = testsRouter
