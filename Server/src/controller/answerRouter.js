const express = require('express')
const Answer = require('../models/answer')
const Result = require("../models/ReturnItems/result");
const Question = require('../models/question')
const answerRouter = new express.Router();

answerRouter.post('/answer', async(req, res) => {
    let answer = new Answer({
        Content : req.body.Content,
        IsTrue : req.body.IsTrue,
        QuestionId : QuestionId
    })

    try {
        await answer.save()
        let result = new Result(true, "Thêm thành công", "");
        res.status(201).send(result);
      } catch (e) {
        let result = new Result(false, "", "Lỗi khi thêm ");
        res.status(200).send(result);
    }
})

answerRouter.patch('/answer/:id', async (req, res) => {
    let id = req.params.id
    let updates = await Object.keys(req.boby);
    let allowedUpdates = ['Content', 'IsTrue', 'QuestionId']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        let result = new Result(false, '', 'Update khong thoa man');
        return res.status(200).send(result);
    }

    try {
        const answer = await Answer.findOne({ _id: req.params.id })
        if (!answer) {
            let result = new Result(false, '', 'Không tồn tại Answer');
            return res.status(200).send(result)
        }

        updates.forEach((update) => answer[update] = req.body[update])
        await answer.save()
        let result = new Result(true, 'Update success', '');
        res.status(200).send(result);
    } catch (e) {
        let result = new Result(false, '', 'Update fail');
        res.status(200).send(result);
    }
})

module.exports = answerRouter;


// Table Answer {
//     Id ObjectId [pk]
//     Content string
//     IsTrue bool
//     QuestionId ObjectId
//   }