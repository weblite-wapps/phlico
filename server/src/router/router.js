/* Routing logic must be added here*/
const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const database = require('../db/index')


var router = express.Router()
router.use(fileUpload())
router.use(bodyParser.json())
router.use((req, res,next) => {
	// set base rule for this hole route
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
	next()
})


// POST 
router.post('/upload', function(req, res){
	console.log(req.body)
	if (!req.files)
    return res.status(400).send('No files were uploaded.');
	let sampleFile = req.files.sampleFile
	sampleFile.mv('./public/images/image.png', (err) => {
		if (err)
			return res.status(500).send(err)
    res.send('File uploaded!');
	})
})
// GET 
router.get('/:id', ({ params: { id } }, res) => {
	console.log(`id:===> ${id}`)
})
  // loadNote(id)
  // { params: { id } }
  //   .then((note) => res.send(note))
  //   .catch((err) => res.send(err)))


module.exports = router