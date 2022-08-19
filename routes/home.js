const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')


// @desc    Landing page
// @route   GET /
router.get( '/', homeController.getLandingPg)

module.exports = router