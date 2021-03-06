const mongoose = require("mongoose")
// model
const Phlico = require("./models/phlico")

exports.connect = name => {
  mongoose.connect(`mongodb://localhost:27017/${name}`)
  const db = mongoose.connection
  db.on("error", console.log)
  db.once("open", () =>
    console.log("Connection to database successfully is made ..."),
  )
}

exports.savePhoto = photoInfo =>
  new Phlico({ ...photoInfo, date: new Date() }).save()

exports.getAllPhoto = wisId => Phlico.find({ wisId }).exec()

exports.getSinglePhoto = imageName => Phlico.find({ imageName }).exec()

exports.addComment = (photoInfo, comment) =>
  Phlico.update({ ...photoInfo }, { $push: { comments: comment } })

exports.addLike = (photoInfo, userId) =>
  Phlico.update({ ...photoInfo }, { $push: { likes: userId } })

exports.removePhoto = info => Phlico.remove({ ...info })
