const mongoose = require('mongoose')
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


exports.savePhoto = async (photoInfo, filename) => {
	/*configur file name concationation of filename+time+userid.extension*/
	return Phlico.findOne({wisid: photoInfo.wisid}, (err, phlico) => {
		/*--fix Type err should be chaeked */
		if (err) {
			return new Phlico({
				wisid: photoInfo.wisid,
			  userid: photoInfo.userid,
			  username: photoInfo.username,
			  pictures: [{
			  	id: photoInfo.pictures.id,
			  	userid: photoInfo.pictures.userid,
			  	username: photoInfo.pictures.username,
			  	caption: photoInfo.pictures.caption,
			  	comments: []
			  }]
			}).save()
		}
		else {
			return phlico.pictures.push({
		  	id: photoInfo.pictures.id,
		  	imagename: photoInfo.pictures.imagename,
		  	userid: photoInfo.pictures.userid,
		  	username: photoInfo.pictures.username,
		  	caption: photoInfo.pictures.caption,
		  	comments: []
			}).save()
		}
	})
} 

exports.getAllPhoto = async wisid =>  Phlico
	.find({ wisid })
	.exec()

exports.saveComent = async (photoInfo, comment) => {
	return Phlico.findOne({wisid: photoInfo.wisid, pictures:{ id: photoInfo.pictures.id}}, (err, phlico) => {

		/*--fix Type err should be chaeked */
		if (err) {
			console.log("--dbHandler can't get model")
		}
		else {
			return phlico.pictures.push({
		  	id: photoInfo.pictures.id,
		  	imagename: photoInfo.pictures.imagename,
		  	userid: photoInfo.pictures.userid,
		  	username: photoInfo.pictures.username,
		  	caption: photoInfo.pictures.caption,
		  	comments: {$push: {comment}}
			}).save()
		}
	})
} 


// exports.anotherLogics = () => null;

/*export const loadNote = async id => Note
  .findOne({ id })
  .exec()

export const saveNote = async (id, text) => Note
  .findOneAndUpdate({ id }, { id, text }, { upsert: true });
*/