const TestService = require('./../services/tests.service')
class TestsController {
    async createTest(req, res) {
        const {title, answers, questions} = req.body
        const newTest = await TestService.createNewTest(title, questions, answers, req.user)
        res.send(newTest)
    }

    async getAllUserTests(req, res) {
        const allUserTests = await TestService.getAllUserTests(req.user.id)
        res.send(allUserTests)
    }

    async getUserTestById(req, res) {
        const test = await TestService.getUserTestById(req.user.id, req.params.id)
        res.send(test)
    }

    async updateUserTestById(req, res) {
        const {user} = req
        const {title, testId, answers, questions} = req.body
        const updatedTest = await TestService.updateUserTestById(user.id, testId, title, questions, answers)
        res.send(updatedTest)
    }

    async deleteUserTestById(req, res) {
        const { user } = req
        const testId = req.params.id
        const deletedTest = await TestService.deleteUserTestById(user.id, testId)
        res.send(deletedTest)
    }

    async getUserCompletedTests(req, res) {
        const { user } = req
        const completedTests = await TestService.getAllCompletedUserTests(user.id)
        res.send(completedTests)
    }

    async getUserCompletedTestById(req, res) {
        const { user } = req
        const { completedTestId } = req.body
        const completedTestById = await TestService.getCompletedUserTestById(user.id, completedTestId)
        res.send(completedTestById)
    }

}

module.exports = new TestsController()
