const express = require('express')
const cookieParser = require('cookie-parser');
const session = require('express-session')
const bodyParser = require('body-parser')


require('./db/mongoose')

const coureRouter = require('./controller/courseRouter')
const teacherRouter = require('./controller/teacherRouter')
const answerRouter = require('./controller/answerRouter')
const questionRouter = require('./controller/questionRouter')
const studentRouter = require('./controller/studentRouter')



const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Router  
app.use(coureRouter)
app.use(teacherRouter)
app.use(studentRouter)
module.exports = app