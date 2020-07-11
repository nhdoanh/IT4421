const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    StudentId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    QLId: {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    Result : {
        type : Boolean,
        require : true
    }
},{
    timestamps : true
})

scoreSchema.virtual('Student', {
    req : 'Student',
    localField : 'StudentId',
    foreignField : '_id'
})

scoreSchema.virtual('QuestionLesson',{
    req : 'QuestionLesson',
    localField : 'QLId',
    foreignField : '_id'
})

const Score = mongoose.model('Score', scoreSchema)

module.exports = Score
// Table TestResult{
//     Id ObjectId [pk]
//     StudentId ObjectId
//     LCId ObjectId
//     Result bool
//   }