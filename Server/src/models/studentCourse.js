const mongoose = require('mongoose')

const studentCourseSchema = mongoose.Schema({
    StudentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'student'
    },
    CourseId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'course'
    },
    ExpireDate: {
        type: Date,
        required: true   
    }
},{
    timestamps: true
})

studentCourseSchema.virtual('course', {
    ref: 'Course',
    localField: 'CourseId',
    foreignField: '_id'
})

const StudentCourse = mongoose.model('StudentCourse', studentCourseSchema)

module.exports = StudentCourse 

// Table StudentCourse{
//     Id ObjectId [pk]
//     StudentId ObjectId
//     CourseId ObjectId
//     ExpireDate datetime
//   }