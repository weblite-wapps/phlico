const mongoose = require('mongoose')
// const R = require('ramda')
// model
const Phlico = require('./models/index')


/*Database handlers*/
exports.connect = name => {
	mongoose.connect(`mongodb://localhost:27017/${name}`)

	const db = mongoose.connection
	db.on('error', console.log)
	db.once('open', () => {
		console.log('Connection to database successfully is made ...')
	})
}


exports.savePhoto = photoInfo => new Phlico(photoInfo).save()

exports.getAllPhoto = wisid =>  Phlico
	.find({ wisid })
	.exec()

exports.getSinglePhoto = imageName =>  Phlico
  .find({ imageName })
  .exec()


exports.addComment = (photoInfo, comment) => Phlico
  .update({...photoInfo},
    {$push: {comments: comment}})

exports.addLike = (photoInfo, userid) => Phlico
  .update({...photoInfo},
    {$push: {likes: userid}})

exports.removePhoto = (info) => Phlico
  .remove({...info})
