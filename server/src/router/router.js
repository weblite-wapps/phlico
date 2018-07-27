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
	res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
	next()
})

// POST
router.post('/upload', upload.single('image'), function (req, res) {
  if (!req.file) {
    console.log('No File received in router')
    res.send({ success: false })
  }
  else {
    const PORT = 3000
    const domain = `${req.protocol}://${req.hostname}:${PORT}/img/`

    //  image reshape here
    Image.saveHighResolution(domain, req.file.filename, req.file.size)
    Image.saveMiniSize(domain, req.file.filename)
    .then(() => {
      //  Database
      const doc = {
        wisid: req.body.wisid,
        userid: req.body.userid,
        username: req.body.username,
        caption: req.body.caption,
        imagename: req.file.filename,
        comments: [],
        likes: [],
      }
      database
        .savePhoto(doc)
        .then(() => res.send({doc: {
            imageName: doc.imagename,
            comments: doc.comments,
            caption: {
              username: doc.username,
              likes: doc.likes.length,
              text: doc.caption,
            },
            likeState: false,
          }
        }))
        .catch(err => console.log(err))
    })
  }

})
router.post('/addComment', function (req, res) {
  const comment = {
    author: req.body.author,
    opinion: req.body.opinion,
    date: req.body.date,
  }
  const info = {
    userid: req.body.userid,
    imagename: req.body.imagename,
  }

  database
    .addComment(info, comment)
    .then(response => res.send(response))
    .catch(err => console.log("addComment --Err:",err))
})

router.post('/addLike', function (req, res) {
  const info = {
    imagename: req.body.imagename,
  }

  database
    .addLike(info, req.body.userid)
    .then(response => res.send(response))
    .catch(err => console.log("addComment --Err:",err))
})

// GET
router.get('/img/:name', ({params: {name}}, res) => {
  console.log("download page with name of=", name)
  res.download(`./public/images/${name}`, (err) => {
    if(err) console.log("Download Err", err)
  })
})
router.get('/load/all/:wisid', ({params: {wisid}}, res) => {
  database.getAllPhoto(wisid)
    .then(photos => res.send(photos))
    .catch(err => console.log(err))
})
router.get('/load/single/:imagename', ({params: {imagename}}, res) => {
  database.getSinglePhoto(imagename)
    .then((photo)=> res.send(photo[0]))
    .catch(err => console.log(err))
})


module.exports = router