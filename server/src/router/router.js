/* Routing logic must be added here*/
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const Image = require('../helper/index')['Image']
const database = require('../db/index')


const storage = multer.diskStorage({
  destination: './public/images',
  filename: function (req, file, callback) {
  	callback(null, Date.now().toString() + path.extname(file.originalname))
  	// callback(null, file.originalname)
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
  if (!req.file) {
    console.log('No file recived!')
    res.send({ success: false })
  }
  else {
    const domain = `${req.protocol}://${req.hostname}:3000/img/`

    console.log('domain', domain)
    //  image reshape here
    Image.saveMiniSize(domain, req.file.filename)
    Image.saveHighResolution(domain, req.file.filename, req.file.size)

  //  Database
    const doc = {
      wisid: req.body.wisid,
      username: req.body.username,
      userid: req.body.userid,
      caption: req.body.caption,
      imagename: req.file.filename,
      comments: [],
      likes: [],
    }
    console.log("doco:", doc)
    database.savePhoto(doc)
  }
  res.send({ success: true })
})


// GET
router.get('/img/:name', ({params: {name}}, res) => {
  console.log("indownload page with name of=", name)
  res.download(`./public/images/${name}`, (err) => {
    if(err) console.log("Download Err", err)
  })
})

/*Test*/
router.get('/load', (req, res) => {
  database.getAll()
    .then((photos) => res.send(photos))
    .catch((err) => console.log(err))
  // res.send({"name": 123})
})


router.get('/load/:wisid', ({params: {wisid}}, res) => {
  database.getAllPhoto(wisid)
    .then((photos) => res.send(photos))
    .catch((err) => console.log(err))
})

  // loadNote(id)
  // { params: { id } }
  //   .then((note) => res.send(note))
  //   .catch((err) => res.send(err)))


module.exports = router