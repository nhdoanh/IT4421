const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
    Content : {
        type : String,
        require : true
    }, 
    IsTrue : {
        type : Boolean,
        require : true
    },
    QuestionId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }
},{
    timestamps : true
})

const Answer = mongoose.model('Answer', answerSchema)

module.exports = Answer

// Table Answer {
//     Id ObjectId [pk]
//     Content string
//     IsTrue bool
//     QuestionId ObjectId
//   }