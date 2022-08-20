const express = require('express')
const router = express.Router()
const housesController = require('../controllers/houses')

const Character = require('../models/Characters')

// @desc    Show Person Page
// @route   GET /houses/person
router.get('/person', housesController.getPerson)

// @desc    Add Page
// @route   GET /houses/add
router.get('/add', housesController.getAddForm)

// @desc    Process add form
// @route   POST /houses
router.post("/", housesController.addPerson) 

module.exports = router