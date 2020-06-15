const express = require('express')
const router = express.Router()
const jurnalController = require('../controllers/JurnalController')

router.use('/', jurnalController)


module.exports = router