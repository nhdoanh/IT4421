const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    TeacherId: {
        type : mongoose.Schema.Types.ObjectId,
        required: true
    },
    Price: {
        type : Number,
        required : false,
        min: [0, 'Giá trị không thể âm']
    },
    Subject: {
        type : String,
        required : true,
        enum : ['Math', 'Literature']
    },
    Grade: {
        type : Number,
        required : true,
        min : 1,
        max : 12
    },
    IsFree: {
        type: Boolean,
        required : true,
        default : false
    }
},{
    timestamps : true
}) 

courseSchema.virtual('teachers',  {
    ref: 'Teacher',
    localField: 'TeacherId',
    foreignField : '_id'
})

const Course = mongoose.model('Course', courseSchema)

module.exports = Course
// Table Course as C {
//     Id ObjectId [pk]
//     TeacherId ObjectId 
//     Price int
//     Subject string
//     Grade   string
//     IsFree bool
//   }