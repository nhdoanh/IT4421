const mongoose = require("mongoose")
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const studentSchema = new mongoose.Schema({
    FullName:{
        type: String,
        trim: true,
        required: true
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        toLowerCase: true,
        unique: [true, 'Duplicate Email'],
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    Password: {
        type: String,
        required: true,
        minlength: 7,
        trim : true,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('password cannot contain "password"')
            }
        }
    },
    PhoneNumber : {
        type: String,
        length: 10
    },
    DOB: {
        type: Date,
    },
    Address: {
        type: String
    },
    Gender : {
        type : String,
    },
    IsBlock: {
        type: Boolean,
        default: false
    },
    tokens: [{
        token: {
            type: String,
            require: true
        }
    }]
},{
    timestamps: true
})

studentSchema.virtual('invoids', {
    ref: 'Invoid',
    localField: '_id',
    foreignField: 'StudentId'
})

studentSchema.virtual('testResults', {
    ref: 'TestResult',
    localField: '_id',
    foreignField: 'StudentId'
})

studentSchema.virtual('courses', {
    ref: 'studentCourse',
    localField: '_id',
    foreignField: 'CourseId'
})

studentSchema.methods.toJSON = function () {
    const student = this
    const studentObject = student.toObject()

    // delete studentObject.password
    // delete studentObject.tokens
    // delete studentObject.avatar

    return studentObject
}


/**Generate Authoration Token 
 * 
 */
studentSchema.methods.generateAuthToken = async function () {
    const student = this
    // console.log('this')
    const token = jwt.sign({ _id: student._id.toString() }, process.env.JWT_SECRET)
    console.log(token)
    student.tokens = student.tokens.concat({ token })
    await student.save()

    return token
}

studentSchema.statics.findByCredentials = async (email, password) => {
    const student = await Student.findOne({ Email: email })
    
    if (!student) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, student.Password)
    if (!isMatch) {
        throw new Error('Unable to login')
    }
    return student
}

/**Genrarate token
 * 
 */
studentSchema.statics.generateAuthToken = async function()  {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

/**Hash the plain text password before saving
 * 
 */
studentSchema.pre('save', async function (next) {
    const student = this

    if (student.isModified('Password')) {
        student.Password = await bcrypt.hash(student.Password, 8)
    }

    next()
})


const Student = mongoose.model('Student', studentSchema)

module.exports = Student

// Table Student as S {
//     Id ObjectId [pk]
//     FullName string
//     Email string
//     Password string
//     PhoneNumber string
//     DOB datetime
//     Address string
//     Gender string
//     IsBlock boolean
//   }