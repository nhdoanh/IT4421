const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    Content : {
        type : String,
        required : true
    },
    Subject : {
        type : String,
        required : true
    },
    Type : {
        type : String,
        required : true
    },
    Grade : {
        type : Number,
        min : 1,
        max : 12,
        required : true
    },
    IsDeleted : {
        type : Boolean,
        default : false
    }
},{
    timestamps : true
})

questionSchema.virtual('Answers', {
    req : 'Answer',
    localField : '_id',
    foreignField : 'questionid'
})

questionSchema.methods.toJSON = function(){
    const question = this
    const questionObject = question.toObject()

    delete IsDeleted
    return questionObject
}

const Question = mongoose.model('Question', questionSchema)

module.exports = Question

// Table Question {
//     Id ObjectId [pk]
//     Content string
//     Type string
//     Subject string
//     Grade string
//     IsDeleted bool
//   }