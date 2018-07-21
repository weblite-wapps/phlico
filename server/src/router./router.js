/* Routing logic must be added here*/
const express = require('express')
const bodyParser = require('body-parser')
// const fileUpload = require('express-fileupload')
const multer = require('multer')
const database = require('../db/index')
const path = require('path')

const storage = multer.diskStorage({
  destination: './public/images',
  filename: function (req, file, callback) {
  	const cc = Date.now().toString() + path.extname(file.originalname)
  	console.log('my new file name cc', cc)
  	callback(null, Date.now().toString() + '-as123' +path.extname(file.originalname))
  }
})
const upload = multer({ storage })

const router = express.Router()
router.use('/static', express.static('./public/images/'))
// router.use(fileUpload())
router.use(bodyParser.json())
router.use((req, res,next) => {
	// set base rule for this hole route
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
	next()
})


// GET 
// router.get('/:wisid', (req, res) => {


// })


// POST 
// 
router.post('/upload', upload.single('image'), function(req, res){

	console.log(req.body)
	console.log(req.file)
	if (!req.file) {
		console.log('No file recived!')
		res.send({
			success: false
		})
	}
	else {
		console.log('Hooray file recived!')
		const host = req.host
		const filepath = `${req.protocol}//${host}:3000/${req.file.path}`
		console.log("my file path is :=",filepath)
		res.send({
			success: true
		})
	}
	// if (!req.files)
 //    return res.status(400).send('No files were uploaded.');
	// let sampleFile = req.files.sampleFile
	// sampleFile.mv(`./public/images/${sampleFile.name}`, (err) => {
	// 	if (err)
	// 		return res.status(500).send(err)
 //    res.send('File uploaded!');
	// })
})
router.post('/atest', upload.single('image'), function(req, res) {  
	console.log('a test')
	console.log(req.file)
	console.log(req.body)
})

// GET 
router.get('/:id', ({ params: { id } }, res) => {
	console.log(`id:===> ${id}`)
})
router.get('/img/:name', ({params: {name}}, res) => {
	console.log('in image url')
	res.download(`./public/images/${name}`)
})
  // loadNote(id)
  // { params: { id } }
  //   .then((note) => res.send(note))
  //   .catch((err) => res.send(err)))


module.exports = router