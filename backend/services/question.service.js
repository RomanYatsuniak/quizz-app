const Question = require('./../models/Question.model')
const AnswerService = require('../services/answers.service')
const {v4: uuidv4} = require('uuid')
class QuestionService {
    async createQuestions(questions, answers, testId) {
        await Promise.all(questions.map(async question => {
            const questionOptions = {
                id: uuidv4(),
                description: new Date().toString(),
                testId,
                type: question.type,
                order: question.order
            }

            await Question.create(questionOptions)

            await AnswerService.createAnswers(answers, questionOptions.id)
        }))
    }

    async updateQuestions(questions, answers, testId) {
        await Promise.all(questions.map(async question => {
            await Question.update(question, { where: {testId}})
            await AnswerService.updateAnswers(answers, question.id)
        }))
    }

    async deleteQuestionsByTestId(testId) {
        const deletedQuestions = await Question.findAll({where: {testId}})
        const deletedQuestionIds = deletedQuestions.map(q => q.dataValues.id)
        const deletedTestIds = deletedQuestions.map(q => q.dataValues.testId)
        await Promise.all(deletedQuestionIds.map(async id => {
            await AnswerService.deleteAnswersByQuestionId(id)

        }))

        await Promise.all(deletedTestIds.map(async id => {
            await Question.destroy({where: {testId: id}})
        }))
    }
}

module.exports = new QuestionService()
