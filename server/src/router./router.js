/* Routing logic must be added here*/
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const gm = require('gm')
const database = require('../db/index')


const storage = multer.diskStorage({
  destination: './public/images',
  filename: function (req, file, callback) {
  	// callback(null, Date.now().toString() + '-as123' +path.extname(file.originalname))
  	callback(null, file.originalname)
  }
})
const upload = multer({ storage })

const router = express.Router()
router.use('/static', express.static('./public/images/'))
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
router.post('/upload', upload.single('image'), function (req, res) {
  console.log('in /upload post method')

  if (!req.file) {
    console.log('No file recived!')
    res.send({ success: false })
  }
  else {
    const domain = `${req.protocol}://${req.hostname}:3000`
    const filesrc = `/img/${req.file.filename}`

    /*Reformat and resize image with graphics magic*/
    gm(domain + filesrc)
    	.size(function (err, size) {
    	  if(err) console.log("Size --err",err)
    		this.gravity("Center")
    	  this.extent(Math.max(size.width, size.height), Math.max(size.width, size.height))
    	  this.resize(400, 400)
        this.write(`./public/images/square-${req.file.filename}`, (err) => {
          if(err) console.log("Write --err",err)
    	  })
      })
    res.send({ success: true })
  }
})


// GET
router.get('/img/:name', ({params: {name}}, res) => {
  res.download(`./public/images/${name}`, (err) => {
    if(err) console.log("Download Err", err)
  })
})
  // loadNote(id)
  // { params: { id } }
  //   .then((note) => res.send(note))
  //   .catch((err) => res.send(err)))


module.exports = router