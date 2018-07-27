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
		// Test
		// db.db.dropDatabase()
	})
}


exports.savePhoto = photoInfo => new Phlico(photoInfo).save()
/*configur file name concatenation of filename+time+userid.extension*/

exports.getAllPhoto = wisid =>  Phlico
	.find({ wisid })
	.exec()

exports.getSinglePhoto = imagename =>  Phlico
  .find({ imagename })
  .exec()


exports.addComment = (photoInfo, comment) => {
  //
  // if (like) {
  //   Phlico.update({...photoInfo},
  //     {$push: {comments: comment, likes: photoInfo.userid}}, function (err) {
  //       if (err) console.log("can not update phlico document --Err:", err)
  // }
    Phlico.update({...photoInfo},
      {$push: {comments: comment}}, function (err) {
        if (err) console.log("can not update phlico document --Err:", err)
      })
}

exports.addLike = (photoInfo, userid) => {
  Phlico.update({...photoInfo},
    {$push: {likes: userid}}, function (err) {
      if (err) console.log("can not update phlico document --Err:", err)
    })
}
// exports.anotherLogics = () => null;

/*export const loadNote = async id => Note
  .findOne({ id })
  .exec()

export const saveNote = async (id, text) => Note
  .findOneAndUpdate({ id }, { id, text }, { upsert: true });
*/
