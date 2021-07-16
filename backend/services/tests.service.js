const Test = require('./../models/Test.model')
const User = require('./../models/User.model')
const Answer = require('./../models/Answer.model')
const Question = require('./../models/Question.model')
const {v4: uuidv4} = require('uuid')
const AnswerService = require('./answers.service')
const QuestionService = require('./question.service')
class TestsService {
    async createNewTest(title, questions, answers, user) {
        const newTest = {
            id: uuidv4(),
            title,
            userId: user.id,
            created_at: new Date().toString(),
            completed: false
        }

        await Test.create(newTest)

        await QuestionService.createQuestions(questions, answers, newTest.id)

        return newTest
    }

    async getAllUserTests(userId) {
        const allTests = await Test.findAll({where: {userId}, include: [{
                model: Question,
                include: Answer
            }]})
        return allTests
    }

    async getUserTestById(userId, testId) {
        const test = await Test.findAll({where: {userId, id: testId}, include: [{
            model: Question,
                where: {
                    testId
                },
                include: Answer
            }]})
        return test
    }

    async updateUserTestById(userId, testId, title, questions, answers) {
        const test = await Test.update({title}, { where: {userId}})

        await QuestionService.updateQuestions(questions, answers, testId)

        return test
    }

    async completeTestById(testId) {
        const completedTest = await Test.update({completed: true}, {where: {testId}})
        return completedTest
    }

    async deleteUserTestById(userId, testId) {
        const deletedTest = await Test.findOne({where: {id: testId}})
        await QuestionService.deleteQuestionsByTestId(testId)
        await Test.destroy({where: {userId}})

        return deletedTest
    }

    async getAllCompletedUserTests(userId) {
        const completedTests = await Test.findAll({where: {completed: true}, include: [{
                model: Question,
                include: Answer
        }]})
        return completedTests
    }

    async getCompletedUserTestById(userId, testId) {
        const completedTestById = await Test.findOne({where: {completed: true, id: testId}, include: [{
                model: Question,
                include: Answer
            }]})
        return completedTestById
    }
}

module.exports = new TestsService()
