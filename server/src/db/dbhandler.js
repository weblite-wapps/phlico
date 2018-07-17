const mongoose = require('mongoose')
const Picture = require('./models/index')


exports.connect = (name) => {
	mongoose.connect(`mongodb://localhost/${name}`)
	
	var db = mongoose.connection
	db.on('error', console.error.bind(console, 'connection error:'))
	db.once('open', () => {
		console.log('Connection to database successfully is made ...')
		// Test
		// db.db.dropDatabase()
	})
}

// exports.anotherLogics = () => null;
