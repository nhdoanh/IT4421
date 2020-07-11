const express = require('express')
const Test = require('../models/test')
const Result = require('../models/ReturnItems/result')
const testRouter = new express.Router()

testRouter.post('/test', async(req, res) => {
    let test = new Test({
        Name : req.body.Name,
        Type : req.body.Type,
        StratDate : req.body.StratDate,
        ExpireDate : req.body.ExpireDate,
        CourseId : req.body.CourseId,
        IsDelete : false
    })

    try {
        await test.save()
        let result =  new Result(true, 'Lưu thành công', '')
        res.status(200).send(result)
    } catch (e) {
        let result =  new Result(false, '', 'Lưu thất bại')
        res.status(200).send(result)
    }
})

testRouter.get('/test/:id', async(req, res) => {
    let id = req.params.id

    try {
        let test = await Test.findOne({_id : id})
        let result = new Result(true, test, '')
        res.status(200).send(result)
    } catch (e) {
        let result = new Result(false, '', 'Không tồn tại')
        res.status(200).send(result)
    }
})

//Get by Course
testRouter.get('/test', async(req, res) => {
    let course = ""
    if(!req.query.Course){
        let result = new Result(false, '', 'Tham số không hợp lệ')
        res.status(200).send(result)
    }

    try {
        let test = await Test.find({_id : id})
        let result = new Result(true, test, '')
        res.status(200).send(result)
    } catch (e) {
        let result = new Result(false, '', 'Không tồn tại')
        res.status(200).send(result)
    }
})

// Table Test {
//     Id ObjectId [pk]
//     Name string
//     Type string
//     StartDate datetime
//     ExpireDate datetime
//     CourseId ObjectId
//     IsDelete bool
//   }
