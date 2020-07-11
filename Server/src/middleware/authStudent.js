const jwt = require('jsonwebtoken')
const Student = require('../models/student')

const authStudent = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(token, )
        const student = await Student.findOne({ _id: decoded._id, 'tokens.token': token }) 
        // console.log(student)
        if (!student) {
            throw new Error()
            // console.log("Cannot find User")
        }

        req.token = token
        req.student = student
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = authStudent
