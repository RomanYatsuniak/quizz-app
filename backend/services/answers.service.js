const Answer = require('./../models/Answer.model')
const {v4: uuidv4} = require('uuid')
class AnswersService {
    async makeAnswerToQuestion(userId, questionId, answer) {

    }

    async getAllUserAnswers(userId) {

    }

    async getUserAnswersToTestId(userId) {

    }

    async createAnswers(answers, questionId) {
        await Promise.all(answers.map(async answer => {
            await Answer.create({
                id: uuidv4(),
                value: answer.value,
                correct: answer.correct,
                questionId
            })
        }))
    }

    async setUserAnswers(answers) {

    }

    async updateAnswers(answers, questionId) {
        await Promise.all(answers.map(async answer => {
            await Answer.update(answer, { where: { questionId }})
        }))
    }

    async deleteAnswersByQuestionId(questionId) {
        const deletedAnswers = await Answer.findAll({where: {questionId}})
        const deletedAnswersIds = deletedAnswers.map(answer => answer.dataValues.id)
        await Promise.all(deletedAnswers.map(async id => {
            await Answer.destroy({where: {questionId}})
        }))
    }
}

module.exports = new AnswersService()
