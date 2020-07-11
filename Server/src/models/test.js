const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : false
    },
    StartDate : {
        type : Date,
        required : true
    },
    ExpireDate : {
        type: Date
    },
    CourseId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    IsDeleted : {
        type : Boolean,
        default : false
    }
},{
    timestamps : true
})

testSchema.methods.toJSON = function(){
    const test = this
    const testObject = test.toObject()

    delete IsDeleted 
    return testObject
}

const Test = mongoose.Model('Test', testSchema)

return Test

// Table Test {
//     Id ObjectId [pk]
//     Name string
//     Type string
//     StartDate datetime
//     ExpireDate datetime
//     CourseId ObjectId
//     IsDelete bool
//   }