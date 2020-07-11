const express = require('express')
const Teacher = require('../models/teacher')
const Result = require('../models/ReturnItems/result')
const teacherRouter = new express.Router()


teacherRouter.post('teacher/login', async (req, res) => {
    try {
        const teacher = await Teacher.findByCredentials(req.body.Email, req.body.Password)
        const token = await teacher.generateAuthToken()
        res.send({ teacher, token })
    } catch (e) {
        res.status(400).send(e)
    }
})



teacherRouter.post('/teacher', async (req, res) => {
    let teacher = new Teacher({ ...req.body, IsDeleted: false })

    try {
        await teacher.save()
        let result = new Result(true, 'Thêm thành công', '')
        res.status(201).send(result );
    } catch (e) {
        let result;
        if (e.code == 11000) {
            result = new Result(false, '', 'Email đã tồn tại')
        } else {
            result = new Result(false, '', 'Lỗi khi thêm')
        }
        res.status(200).send(result);
    }
})

// GET /teacher?limit=10&skip=20
// GET /teacher?sortBy=createdAt:desc
teacherRouter.get('/teacher', async (req, res) => {
    const match = {}
    const sort = {}

    // if (req.query.Fullname) {
    //     match.Fullname = req.query.Fullname
    // }

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    try {
        // await Teacher.populate({
        //     // path: 'teachers',
        //     match,
        //     options: {
        //         limit: parseInt(req.query.limit),
        //         skip: parseInt(req.query.skip),
        //         sort
        //     }
        // }).execPopulate()
        // res.send(req.user.tasks)
        let teacher = await Teacher.find();
        let result = new Result(true, teacher, '')
        res.status(200).send(result)
    } catch (e) {
        console.log(e)
        let result = new Result(false, '', e)
        res.status(200).send(result)
    }
})

teacherRouter.get('/teacher/:id', async (req, res) => {
    let id = req.params.id;

    try {
        let teacher = await Teacher.findById(id);
        let result = new Result(true, teacher, '');
        res.status(200).send(result);
    } catch (e) {
        let result = new Result(false, '', 'Không tồn tại');
        res.status(200).send(result);
    }
})

//Danh Cho Admin, User
//input 
//output
//notes
teacherRouter.patch('/teacher/:id', async (req, res) => {
    console.log(req.body)
    let updates = await Object.keys(req.body)
        let allowedUpdates = ['Email', 'FullName', 'PhoneNum', 'DOB', 'Gender']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        let result = new Result(false, '', 'Update khong thoa man');
        return res.status(200).send(result);
    }

    try {
        const teacher = await Teacher.findOne({ _id: req.params.id })
        if (!teacher) {
            let result = new Result(false, '', 'Không tồn tại Teacher');
            return res.status(200).send(result)
        }

        updates.forEach((update) => teacher[update] = req.body[update])
        await teacher.save()
        let result = new Result(true, 'Update success', '');
        res.status(200).send(result);
    } catch (e) {
        let result = new Result(false, '', 'Update fail');
        res.status(200).send(result);
    }
})

teacherRouter.patch('/teacher/password', async(req, res) =>{
    let update = Object.keys(req.boby)
    let allowedUpdates = ['password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        let result = new Result(false, '', 'Update khong thoa man');
        return res.status(200).send(result);
    }

    try {
        const teacher = await Teacher.findOne({ _id: req.params.id })
        if (!teacher) {
            return res.status(200).send(new Result(false, '', 'Không tồn tại Teacher'))
        }

        updates.forEach((update) => teacher[update] = req.body[update])
        await teacher.save()
        let result = new Result(true, 'Update success', '');
        res.status(200).send(result);
    } catch (e) {
        let result = new Result(false, '', 'Update fail');
        res.status(200).send(result);
    }
})

teacherRouter.delete('/teacher/:id', async(req, res) =>{
    let id = req.params.id;    

    try{
        const teacher = await Teacher.findOne({ _id: req.params.id })
    if(!teacher){
        return res.status(200).send(new Result(false, '', 'Không tồn tại Teacher'))
    }

        teacher.IsDeleted = true;
        teacher.save()
        return res.status(200).send(new Result(true, 'Delete Success', ''))
    }catch(e){
        return res.status(200).send(new Result(false, '', 'Delete Fail'))
    }
})
module.exports = teacherRouter
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