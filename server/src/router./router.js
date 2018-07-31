/*Third party packages*/
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const crypto = require('crypto')
const path = require('path')

/*Project dependencies packages*/
const Image = require('../helper/index')['Image']
const File =  require('../helper/index')['File']
const database = require('../db/index')

const domain = 'http://localhost:3000'

const storage = multer.diskStorage({
  destination: './public/images',
  filename: function (req, file, callback) {
    crypto.randomBytes(16, function(err, buffer) {
      const token = buffer.toString('hex');

      callback(null, token + '_' + Date.now().toString() + path.extname(file.originalname))
    })
  }
})

const upload = multer({ storage })
const router = express.Router()

router.use('/static', express.static('./public/images/'))
router.use(bodyParser.json())
router.use((req, res,next) => {
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
    const url = domain + '/img/'
    //  image reshape here
    
    Image.saveHighResolution(url, req.file.filename, req.file.size)
    .then(() => console.log('saveHighResolution finished'))
    .catch(err => console.log(err))

    Image.saveMiniSize(url, req.file.filename)
    .then(() => {
      const doc = {
        wisId: req.body.wisId,
        userId: req.body.userId,
        userName: req.body.userName,
        caption: req.body.caption,
        imageName: req.file.filename,
        comments: [],
        likes: [],
      }

      database
        .savePhoto(doc)
        .then(() => res.send({doc: {
            imageName: doc.imageName,
            comments: doc.comments,
            caption: {
              userName: doc.userName,
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
    imageName: req.body.imageName,
  }
  console.log('info, comment:= ', info, comment)
  database
    .addComment(info, comment)
    .then(response => res.send({comment}))
    .catch(err => console.log("addComment --Err:",err))
})

router.post('/addLike', function (req, res) {
  const info = {
    imageName: req.body.imageName,
  }
  console.log('info:= ', info)
  database
    .addLike(info, req.body.userId)
    .then(response => res.send(response))
    .catch(err => console.log("addComment --Err:",err))
})

router.post('/remove', function (req, res) {
  const info = {
    imageName: req.body.imageName,
    userId: req.body.userId
  }
  
  database
    .removePhoto(info)
    .then(response => {
      res.send({'imageName': info.imageName})
      File.remove(info.imageName)
      File.remove(`Sqr_${info.imageName}`)
    })
    .catch(err => console.log("addComment --Err:",err))
})

// GET
router.get('/img/:name', ({params: {name}}, res) => {
  res.download(`./public/images/${name}`, (err) => {
    if(err) console.log("Download Err", err)
  })
})
router.get('/load/all/:wisId', ({params: {wisId}}, res) => {
  database.getAllPhoto(wisId)
    .then(photos => res.send(photos))
    .catch(err => console.log(err))
})
router.get('/load/single/:imageName', ({params: {imageName}}, res) => {
  console.log("imageName:=", imageName)
  database.getSinglePhoto(imageName)
    .then((photo)=> res.send(photo[0]))
    .catch(err => console.log(err))
})


module.exports = router