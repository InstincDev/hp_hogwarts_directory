const express = require("express");
const router = express.Router();
const housesController = require("../controllers/houses");

// @desc    Show Person Page
// @route   GET /houses/person
router.get("/person/:id", housesController.getPerson);

// @desc    Show Gryffindors Page
// @route   GET /houses/gryffindors
router.get("/gryffindors", housesController.getGryffindors);

// @desc    Show Slytherins Page
// @route   GET /houses/slytherins
router.get("/slytherins", housesController.getSlytherins);

// @desc    Show Hufflepuffs Page
// @route   GET /houses/hufflepuffs
router.get("/hufflepuffs", housesController.getHufflepuffs);

// @desc    Show Ravenclaws Page
// @route   GET /houses/ravenclaws
router.get("/ravenclaws", housesController.getRavenclaws);

// @desc    Process add form
// @route   POST /houses
router.post("/", housesController.addPerson);

module.exports = router;
