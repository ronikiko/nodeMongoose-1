const express = require('express')

const router = express.Router()

const { getAllPersones } = require('../controllers/personesController')



router.get('/', getAllPersones )


module.exports = router