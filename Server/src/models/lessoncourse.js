const mongoose = require('mongoose')

const lessonCourseSchema = new mongoose.Schema({
    LessonId : {
        type: mongoose.Schema.Types.ObjectId,
        required : true
    },
    CourseId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    Order: {
        type : Number,
        required : true
    },
    IsDeleted : {
        type : Boolean,
        required : true,
        default : false
    }
},{
    timestamps : true
})

// lessonCourseSchema.virtual('Course', {
//     ref: 'Course',
//     localField : 'CourseId',
//     foreignField : '_id'
// })

lessonCourseSchema.virtual('Lesson', {
    ref: 'Lesson',
    localField : 'LessonId',
    foreignField : '_id'
})

lessonCourseSchema.methods.toJSON = function(){
    const lessonCourse = this
    const lcObject = lessonCourse.toObject()

    delete lcObject.IsDeleted
    return lcObject
}

const LessonCourse = mongoose.Model('LessonCourse', lessonCourseSchema)

module.exports = LessonCourse

// Table LessonCourse{
//     Id ObjectId [pk]
//     LessonId ObjectId 
//     CourseId ObjectId 
//     IsDelete bool
//   }