const mongoose = require('mongoose')
// const R = require('ramda')
// model
const Phlico = require('./models/index')


/*Database handlers*/
exports.connect = name => {
	mongoose.connect(`mongodb://localhost/${name}`)

	const db = mongoose.connection
	db.on('error', console.error.bind(console, 'connection error:'))
	db.once('open', () => {
		console.log('Connection to database successfully is made ...')
		// Test
		db.db.dropDatabase()
	})
}


exports.savePhoto = (photoInfo) => {
	/*configur file name concatenation of filename+time+userid.extension*/
	return new Phlico(photoInfo).save()
}

exports.getAllPhoto = wisid =>  Phlico
	.find({ wisid })
	.exec()

/*photoInfo = {wisid, picture:{id} ;; comment: {[Comment]} */
exports.saveComment = (photoInfo, comment) => new Phlico({
  ...photoInfo,
  _id: photoInfo.id,
  // comments: R.append(comment, photoInfo.comments)
}).save()


// exports.anotherLogics = () => null;

/*export const loadNote = async id => Note
  .findOne({ id })
  .exec()

export const saveNote = async (id, text) => Note
  .findOneAndUpdate({ id }, { id, text }, { upsert: true });
*/