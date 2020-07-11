const mongoose = require('mongoose')

const testQuestionSchema = new mongoose.Schema({
    TestId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    QuestionId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }
},{
    timestamps : true
})

testQuestionSchema.virtual('Question', {
    req : 'Question',
    localField : 'QuestionId',
    foreignField : '_id'
})

testQuestionSchema.virtual('Test', {
    req : 'Test',
    localField : 'TestId',
    foreignField : '_id'
})

const TestQuestion = mongoose.Model('TestQuestion', testQuestionSchema)

module.exports = TestQuestion

// Table TestQuestion{
//     Id ObjectId [pk]
//     TestId ObjectId
//     QuestionId ObjectId
//   }