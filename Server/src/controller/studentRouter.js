const express = require('express')
const Student = require('../models/student')
const Result = require('../models/ReturnItems/result')
const authStudent = require('../middleware/authStudent')

const studentRouter = new express.Router()

/**Login Route
 * 
 */
studentRouter.post('/student/login', async (req, res) => {
    try {
        const student = await Student.findByCredentials(req.body.Email, req.body.Password)
        const token = await student.generateAuthToken()
        const result = new Result(true, { student, token }, '')
        res.send(result)
    } catch (e) {
        const result = new Result(false, '', e)
        res.status(400).send(result)
    }
})

/**Logout Route
 * 
 */
studentRouter.post('/student/logout', authStudent,  async (req, res) => {
    try{
        // console.log(req.student)
        req.student.tokens = req.student.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.student.save()
        const result = new Result(true, 'Đăng xuất thành công', '')
        res.send(result)
    } catch (e) {
        res.status(500).send()
    }
})

/**Logout all 
 * 
*/

studentRouter.post('/student/logoutall', authStudent, async (req, res) => {
    try {
        req.student.tokens = []
        await req.student.save()
        const result = new Result(true, 'Đăng xuất thành công', '')
        res.send(result)
    } catch (e) {
        res.status(500).send()
    }
})


/** Create Student 
 *  
 */
studentRouter.post('/student', async (req, res) => {
    let student = new Student({ ...req.body })

    try {
        console.log(req.body)
        await student.save()
        const token = await student.generateAuthToken()
        let result = new Result(true, {student, token}, '')
        res.status(201).send(result)
    } catch(e) {
        let result
        if(e.code == 11000) {
            result = new Result(false, 'Email đã tồn tại', e)
        } else {
            result = new Result(false, 'Lỗi khi thêm', e)
        }
        res.send(result)
    }
})

/**Getting my information
 * 
 */
// studentRouter.get('/student/me', async (req, res) => {
//     res.send(user)
// })


/**Getting all student, not sortting them
 * 
 */
 studentRouter.get('/student', async (req, res) => {
    // const match = {}
    // const sort = {}

    // if(req.query.SortBy) {
    //     const parts = req.query.sortBy.split(':')
    //     sort[part[0]] = part[1] === 'desc' ? -1 : 1
    // }

    // try {
    //     let student = await Student.find({})
    //     let result = new Result(true, student, '')
    //     res.status(200),send(result)
    // } catch (e) {
    //     let result = new Result(false, '', e)
    //     res.status(200).send(result)
    // }
    const students = await Student.find({})

    res.send(students)
 })

/**Get my profile
 * 
 */
studentRouter.get('/student/me', authStudent,async (req, res) => {
    res.send(req.student)
})

 /**Getting student by their id
  * 
  */
 studentRouter.get('/student/:id', async (req, res) => {    
    let id = req.params.id

    try{
        let student = await Student.findById(id)
        let result = new Result(trur, student, '')
        res.status(200).send(result)
    } catch(e) {
        let result = new Result(true, '', e)
        res.status(404).send(result)
    }
 })

 /**Update student
  * 
  */
studentRouter.patch('/student/me', authStudent, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['FullName, Password, PhoneNumber, BOD, Address, Gender']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    console.log(req.body)
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    
    try {
        updates.forEach((update) => student[update] = req.body[update])
        await student.save()

        let result = new Result(true, 'Update Success', '')
        res.send(result)
    } catch (e) {
        let result = new Result(false, '',e)
        res.status(400).send(result)
    }
})

// studentRouter.delete('/student/me', async (req, res) => {
//     res.send(req.user)
// })

studentRouter.delete('/student/:id', authStudent, async(req, res) =>{
    let id = req.params.id;    

    try{
        const student = await Student.findOne({ _id: req.params.id })
    if(!student){
        return res.status(200).send(new Result(false, '', 'Không tồn tại'))
    }

        student.IsBlock = true;
        student.save()
        return res.status(200).send(new Result(true, 'Delete Success', ''))
    }catch(e){
        return res.status(200).send(new Result(false, '', 'Delete Fail'))
    }
})

module.exports = studentRouter