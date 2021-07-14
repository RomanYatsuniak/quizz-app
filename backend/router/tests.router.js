const Router = require('express').Router
const testsRouter = new Router()
testsRouter.post('/tests', (req, res) => {

})
testsRouter.get('/test', (req, res) => {
    res.send('Hello from Tests')
})
testsRouter.get('/tests/:id')
testsRouter.put('/tests')
testsRouter.delete('/tests/:id')
testsRouter.get('/tests/completed')
testsRouter.get('/tests/completed/:id')

module.exports = testsRouter
