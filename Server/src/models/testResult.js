const mongoose = require('mongoose')

const testResultSchema = mongoose.Schema({
    StudentId: {
        type : mongoose.Schema.Types.ObjectId,
        required: true
    },
    TQId: {
        type : mongoose.Schema.Types.ObjectId,
        required: true
    },
    StudentId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }
},{
    timestamps : true
})


module.exports = Test
// Table TestResult{
//     Id ObjectId [pk]
//     StudentId ObjectId
//     TQId ObjectId
//   }