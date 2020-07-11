const express = require('express')
const Parent = require('../models/parent')
const Result = require('../models/ReturnItems/result')
const auth = require('../middleware/auth')
const parentRouter = new express.Router()


/**adding parent to the database
 * 
 */
parentRouter.post('/parent', auth, async (req, res) => {
    try {
        await parent.save()
        let result = new Result(true, 'Thêm thành công', '')
        res.status(201).send(parent);
    } catch (e) {
        let result 
        if(e.code === 11000){
            result = new Result(false, '', e)
        }else {
            result = new Result(false, '', e)
        }
        res.status(200).send(result)
    }
})

// studentRouter.get('/parent/me', async (req, res) => {
//     res.send(parent)
// })

parentRouter.get('/parent', async (req, res) => {
    const match = {}
    const sort = {}

    if(req.query.SortBy) {
        const parts = req.query.sortBy.split(':')
        sort[part[0]] = part[1] === 'desc' ? -1 : 1
    }

    try {
        let parent = await Parent.find()
        let result = new Result(true, parent, '')
        res.status(200),send(result)
    } catch (e) {
        let result = new Result(false, '', e)
        res.status(200).send(result)
    }
 })


parentRouter.patch('/parent/me', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['FullName, Password, PhoneNumber, Gender']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    console.log(req)
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    
    try {
        updates.forEach((update) => student[update] = req.body[update])
        await parent.save()

        let result = new Result(true, 'Update Success', '')
        res.send(result)
    } catch (e) {
        let result = new Result(false, '','Update false')
        res.status(400).send(e)
    }
})

module.exports = parentRouter