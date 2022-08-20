const express = require('express')
const router = express.Router()
const housesController = require('../controllers/houses')


// @desc    Show Person Page
// @route   GET /houses/person
router.get('/person/:id', housesController.getPerson)



// @desc    Process add form
// @route   POST /houses
router.post("/", housesController.addPerson) 

module.exports = router