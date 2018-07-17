/* Routing logic must be added here*/
const express = require('express')
const bodyParser = require('bosy-parser')
const database = require('../db/index')

var router = express.Router()
router.use(bodyParser.json())
router.use((req, res,next) => {
	// set base rule for this hole route
	next()
})

// GET 

// POST 


module.exports = router