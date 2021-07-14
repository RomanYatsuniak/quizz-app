const testService = require('./../services/tests.service')
class TestsController {
    async createTest(req, res) {
        const newTest = await testService.createNewTest(req.body)
        res.send(newTest)
    }

    async getTests(req, res) {

    }

    async getTestById(req, res) {

    }

    async updateTest(req, res) {

    }

    async deleteTestById(req, res) {

    }

    async getCompletedTestsByCurrentUser(req, res) {

    }

    async getCompletedTestInfo(req, res) {

    }

}

module.exports = new TestsController()
