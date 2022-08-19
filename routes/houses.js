const express = require('express')
const router = express.Router()
const housesController = require('../controllers/houses')


// @desc    Show Person Page
// @route   GET /houses/person
router.get('/person', housesController.getPerson)

// @desc    Add Page
// @route   GET /houses/add
router.get('/add', housesController.getAddForm)

module.exports = router