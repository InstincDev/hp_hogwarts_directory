const express = require('express')
const router = express.Router()
const rosterController = require('../controllers/roster')

// @desc    Show All Persons
// @route   GET /
router.get('/', rosterController.getRoster)

module.exports = router