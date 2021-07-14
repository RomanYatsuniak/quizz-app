const Test = require('./../models/Test.model')
const User = require('./../models/User.model')
const {v4: uuidv4} = require('uuid')
class TestsService {
    async createNewTest(test) {
        const newTest = {
            id: uuidv4(),
            title: test.title,
            userId: test.userId,
            created_at: new Date().toString()
        }
        await Test.create(newTest)
        return newTest
    }

    async getAllUserTests(userId) {

    }

    async getUserTestById(userId, testId) {

    }

    async updateUserTestById(userId, testId) {

    }

    async deleteUserTestById(userId, testId) {

    }

    async getAllCompletedUserTests(userId) {

    }

    async getCompletedUserTestById(userId, testId) {

    }
}

module.exports = new TestsService()
