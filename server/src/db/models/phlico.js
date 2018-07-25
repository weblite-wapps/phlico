// module
const mongoose = require('mongoose')

// Definition of all fields
const definition = {
  wisid: String,
	userid: Number,
  username: String,
  imagename: String,
  caption: String,
	comments: [{
  	authorid: Number,
		author: String,
		opinion: String,
		date: String,
	}],
	likes: [String]
}

//Set any options for the schema
const options = {
  timestamps: true
}

//make the schema as a new instance of a mongoose schema, using our definition and options
const schema = new mongoose.Schema(definition, options)

//export that
module.exports = mongoose.model('Phlico', schema)