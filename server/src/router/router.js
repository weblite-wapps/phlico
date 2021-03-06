// Third party packages
const express = require("express")
const multer = require("multer")
const crypto = require("crypto")
const path = require("path")
const R = require("ramda")
// Project dependencies packages
const Image = require("../helper/imageProcessor")
const { imagesPath, getImagePath, remove } = require("../helper/file")
const database = require("../db/index")

const storage = multer.diskStorage({
  destination: imagesPath,
  filename(req, file, callback) {
    crypto.randomBytes(16, (err, buffer) => {
      const token = buffer.toString("hex")
      callback(
        null,
        `${token}_${Date.now().toString()}${path.extname(file.originalname)}`,
      )
    })
  },
})

const upload = multer({ storage })
const router = express.Router()

// POST
router.post(
  "/upload",
  upload.single("image"),
  ({ body: { wisId, userId, creator, caption }, file }, res) => {
    if (!file) {
      res.send({ success: false })
    } else {
      Image.saveHighResolution(file.filename, file.size).catch(console.log)

      Image.saveMiniSize(file.filename).then(() => {
        const doc = {
          wisId,
          userId,
          creator,
          caption,
          imageName: file.filename,
          comments: [],
          likes: [],
        }
        remove(file.filename)
        database
          .savePhoto(doc)
          .then(() =>
            res.send({
              doc: {
                creator,
                caption,
                imageName: doc.imageName,
                comments: [],
                likes: 0,
                likeState: false,
              },
            }),
          )
          .catch(console.log)
      })
    }
  },
)
router.post(
  "/addComment",
  ({ body: { author, opinion, date, imageName } }, res) => {
    const comment = { author, opinion, date }
    const info = { imageName }

    database
      .addComment(info, comment)
      .then(() => res.send({ comment }))
      .catch(err => console.log("addComment --Err:", err))
  },
)

router.post("/addLike", ({ body: { imageName, userId } }, res) => {
  database
    .addLike({ imageName }, userId)
    .then(response => res.send(response))
    .catch(err => console.log("addComment --Err:", err))
})

router.post("/remove", ({ body: { imageName, userId } }, res) =>
  database
    .removePhoto({ imageName, userId })
    .then(() => {
      res.send({ imageName })
      remove(`high_${imageName}`)
      remove(`Sqr_${imageName}`)
    })
    .catch(err => console.log("addComment --Err:", err)),
)

router.get("/img/:name", ({ params: { name } }, res) => {
  res.download(getImagePath(name), err => {
    if (err) console.log("Download Err", err)
  })
})

router.get("/load/all/:wisId", ({ params: { wisId } }, res) => {
  database
    .getAllPhoto(wisId)
    .then(photos => {
      const reversedPhotos = R.reverse(R.sortBy(R.prop("date"), photos))
      res.send(reversedPhotos)
    })
    .catch(console.log)
})

router.get("/load/single/:imageName", ({ params: { imageName } }, res) => {
  console.log("imageName:=", imageName)
  database
    .getSinglePhoto(imageName)
    .then(photo => res.send(photo[0]))
    .catch(console.log)
})

module.exports = router
