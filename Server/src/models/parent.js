const mongoose = require('mongoose')
const validator = require('validator')

const parentSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
        trim: true
    },
    Gender: {
        type: true,
    },
    Email: {
        type: String,
        unique: [true, 'Duplicate Email'], 
        validate(value) {
            if(validator.isEmail(value)) {
                throw new Error('Email is invalib')
            }
        }
    },
    PhoneNumber: {
        type: String,
        length: 10
    }
})

parentSchema.virtual('invoids', {
    ref: 'Invoid',
    localField: '_id',
    foreignField: 'ParendId'
})

const Parent = mongoose.model('Parent', parentSchema)

module.exports = Parent

// Table Parent as P {
//     Id ObjectId [pk]
//     FullName string
//     Email string
//     PhoneNumber string
//   }