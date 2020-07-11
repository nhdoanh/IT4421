const express = require('express')
const Answer = require('../models/answer')
const Result = require("../models/ReturnItems/result");
const Question = require('../models/question')
const LessonQuestion = require('../models/lessonquestion')
const questionRouter = new express.Router();

questionRouter.post('/question', async(req, res) => {
    let question = new Question({
        Content : req.body.Content,
        Type : req.body.Type,
        Subject : req.body.Subject,
        Grade : req.body.Grade,
        IsDeleted : false
    })

    req.body.Answer.forEach(async answers => {
        let answer = new Answer({
            Content : req.body.Content,
            IsTrue : req.body.IsTrue,
            QuestionId : QuestionId
        })
        try {
            await answer.save();
        } catch (e) {
            let result = new Result(false, '', 'Không thể thêm câu trả lời')
            res.status(200).send(result)
        }
    });

    try {
        await question.save();
        let result = new Result(true, 'Thêm thành công', '')
    } catch (e) {
        let result = new Result(false, '', 'Không thể thêm câu hỏi')
        res.status(200).send(result)
    }
})

questionRouter.get('/question', async(req, res) => {
    let math =[]
    let sort = []

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    try {
        let question = Question.find()
        let result = new Result(true, question, '')
        res.status(200).send(result)
    } catch (e) {
        let result = new Result(false, '', 'Không tồn tại')
        res.status(200).send(result)
    }
})

//getQuestion by LessonId
questionRouter.get('/question', async(req, res) => {
    
    if(!req.query.LessonId){
        let result = new Result(false, '', 'Tham số không hợp lệ')
        res.status(200).send(result)
    }
    let lessonId = req.query.LessonId
    try {
        let question = LessonQuestion.find({})
        let result = new Result(true, question, '')
        res.status(200).send(result)
    } catch (e) {
        let result = new Result(false, '', 'Không tồn tại')
        res.status(200).send(result)
    }
})

questionRouter.patch('/question/:id', async(req, res) => {
    let id = req.params.id
    let updates = await Object.keys(req.boby);
    let allowedUpdates = ['Content', 'IsTrue', 'QuestionId', 'Answers']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        let result = new Result(false, '', 'Update khong thoa man');
        return res.status(200).send(result);
    }

    try {
        const question = await Question.findOne({ _id: req.params.id })
        if (!question) {
            let result = new Result(false, '', 'Không tồn tại Answer');
            return res.status(200).send(result)
        }

        updates.forEach((update) =>{
            if(update != 'answers'){
                answer[update] = req.body[update]
            }else{
                req.body.answers.forEach(async answer => {
                    let answerObject = await Answer.findOne({ _id : answer.id})
                    answerObject.Content = answer.Content
                    answerObject.IsTrue = answer.IsTrue
                    await answerObject.save()
                });
            }
            
        })
        await question.save()
        let result = new Result(true, 'Update success', '');
        res.status(200).send(result);
    } catch (e) {
        let result = new Result(false, '', 'Update fail');
        res.status(200).send(result);
    }
})

questionRouter.delete('/course/:id', async(req, res) =>{
    let id = req.params.id;    
  
    try{
        const course = await Question.findOne({ _id: req.params.id })
    if(!course){
        return res.status(200).send(new Result(false, '', 'Không tồn tại Question'))
    }
  
        course.IsDeleted = true;
        course.save()
        return res.status(200).send(new Result(true, 'Delete Success', ''))
    }catch(e){
        return res.status(200).send(new Result(false, '', 'Delete Fail'))
    }
  })

module.exports = questionRouter

// Table Question {
//     Id ObjectId [pk]
//     Content string
//     Type string
//     Subject string
//     Grade string
//     IsDeleted bool
//   }