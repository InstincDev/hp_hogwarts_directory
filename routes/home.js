const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')


// @desc    Landing page
// @route   GET /
router.get( '/', homeController.getLandingPg)

// @desc    Add Page
// @route   GET /houses/add
router.get('/add', homeController.getAddForm)

module.exports = router