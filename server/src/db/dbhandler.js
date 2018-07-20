const mongoose = require('mongoose')
// model
const Picture = require('./models/index')


exports.connect = function(name) {
	mongoose.connect(`mongodb://localhost/${name}`)

	const db = mongoose.connection
	db.on('error', console.error.bind(console, 'connection error:'))
	db.once('open', () => {
		console.log('Connection to database successfully is made ...')
		// Test
		// db.db.dropDatabase()
	})
}

exports.add = (name) => {
	console.log('hisname is ' + name)
	return new Picture({name}).save()
} 

exports.getAll = () => {
	return Picture.find().exec()
}
// exports.anotherLogics = () => null;

/*export const loadNote = async id => Note
  .findOne({ id })
  .exec()

export const saveNote = async (id, text) => Note
  .findOneAndUpdate({ id }, { id, text }, { upsert: true });
*/