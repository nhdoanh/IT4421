const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const teacherSchema = new mongoose.Schema({
    Fullname : {
        type : String,
        required : false,
        trim : true
    },
    Gender : {
        type : String,
        required : false
    },
    Email : {
        type : String,
        unique : [true, 'Duplicate Email'],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    Password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    DOB: {
        type: Date
    },
    PhoneNumber : {
        type: String,
        length : 10
    },
    IsDeleted : {
        type : Boolean,
        default : false
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
},{
    timestamps : true
})

teacherSchema.methods.toJSON = function () {
    const teacher = this
    const teacherObject = teacher.toObject()

    delete teacherObject.Password
    delete teacherObject.tokens
    delete teacherObject.createAt
    delete teacherObject.updateAt

    return teacherObject
}

teacherSchema.methods.generateAuthToken = async function () {
    const teacher = this
    const token = jwt.sign({ _id: teacher._id.toString() }, process.env.JWT_SECRET)

    teacher.tokens = teacher.tokens.concat({ token })
    await teacher.save()

    return token
}

teacherSchema.statics.findByCredentials = async (Email, Password) => {
    const teacher = await Teacher.findOne({ Email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(Password, teacher.Password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return teacher
}

// Hash the plain text password before saving
teacherSchema.pre('save', async function (next) {
    const teacher = this

    if (teacher.isModified('Password')) {
        teacher.Password = await bcrypt.hash(teacher.Password, 8)
    }

    next()
})


const Teacher = mongoose.model('Teacher', teacherSchema)

module.exports = Teacher

// Table Teacher {
//     Id ObjectId [pk]
//     FullName string
//     Gender string
//     Email string
//     Password string
//     PhoneNum string
//     DOB datetime
//     IsDeleted bool
//   }