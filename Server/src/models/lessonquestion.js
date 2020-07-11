const mongoose = require('mongoose')
const lessonquestionSchema = new mongoose.Schema({
    QuestionId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    LoCId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    IsDeleted : {
        type : Boolean,
        default : false
    }
})

lessonquestionSchema.virtual('Question', {
    ref: 'Question',
    localField: 'QuestionId',
    foreignField : '_id'
})

const LessonQuestion = mongoose.model('LessonQuestion', lessonquestionSchema)

module.exports = LessonQuestion
