const mongoose = require('mongoose')

const lessonShema = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
        trim : true
    }, 
    LessonVideo : {
        type : String,
        required : false,
        trim : true
    },
    Grade : {
        type : Number,
        required : false,
        min : 0,
        max : 12
    },
    Subject : {
        type : String,
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

lessonShema.methods.toJSON = function(){
    const lesson = this
    const lessonObject = lesson.toObject()

    delete lessonObject.IsDeleted
    return lessonObject
}

const Lesson = mongoose.model('Lesson', lessonShema)

module.exports = Lesson

// Table Lesson {
//     Id ObjectId [pk]
//     Name string
//     LessonVideo string
//     Grade string
//        Subject string
//     IsDeleted bool
//   }