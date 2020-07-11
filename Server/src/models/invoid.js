const mongoose = require('mongoose')

invoidSchema = mongoose.Schema({
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Parent'
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Course'
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Student'
    },
    voucherCode: {
        type: String,
        ref: "Voucher"
    }
},{
    timestamps: true
})



const Invoid = mongoose.model('Invoid', invoidSchema)

module.exports = Invoid

// Table Invoid{
//     Id ObjectId 
//     Time datetime
//     ParentId ObjectId
//     CourseId ObjectId
//     StudentId ObjectId
//     VoucherCode string
//   }