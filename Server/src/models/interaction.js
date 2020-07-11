const mongoose = require('mongoose')

const interactionSchema = new mongoose.Schema({
    StudentId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    LocId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }, 
    times : {
        type : Number,
        min : 0
    }
}, {
    timestamps : true
})

interactionSchema.virtual('Student', {
    req : 'Student',
    localField : 'StudentId',
    foreignField : '_id'
})

interactionSchema.virtual('LessonCoures', {
    req : 'LessonCoure',
    localField : 'LocId',
    foreignField : '_id'
})

const Interaction = mongoose.Schema('Interaction', interactionSchema)

module.exports = Interaction

// Table Interaction{
//     Id ObjectId [pk]
//     StudentId ObjectId
//     LoCId ObjectId
//   }