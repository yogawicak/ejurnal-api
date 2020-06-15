const express = require('express')
const router = express.Router()
const Jurnal = require('../models/Jurnal')
const {User} = require('../models/Users')
// const mongoose = require('mongoose')


router.post('/', async (req,res,next) => {
    try {
        const getAllUser = await User.create(req.body)
        res.json(getAllUser)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router