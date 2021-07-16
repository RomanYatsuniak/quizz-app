const Answer = require('./Answer.model')
const CompletedTest = require('./CompletedTest.model')
const Question = require('./Question.model')
const Test = require('./Test.model')
const User = require('./User.model')
const UserAnswers = require('./UserAnswers.model')

CompletedTest.belongsTo(Test)
CompletedTest.belongsTo(User)

Question.hasMany(Answer)
Question.belongsTo(Test)

Answer.belongsToMany(User, {through: UserAnswers})
Answer.belongsTo(Question)

Test.hasMany(Question)
Test.hasOne(CompletedTest)
Test.belongsTo(User)

User.hasMany(Test)
User.hasMany(CompletedTest)
User.belongsToMany(Answer, {through: UserAnswers})



module.exports = {
    Answer,
    CompletedTest,
    Question,
    Test,
    User,
    UserAnswers
}
