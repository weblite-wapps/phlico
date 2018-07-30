// module
const mongoose = require('mongoose')

// Definition of all fields
const definition = {
  wisid: String,
	userid: String,
  username: String,
  imageName: String,
  caption: String,
	comments: [{
		author: String,
		opinion: String,
		date: String,
	}],
	likes: [String]
}

//make the schema as a new instance of a mongoose schema, using our definition
const schema = new mongoose.Schema(definition)

//export that
module.exports = mongoose.model('Phlico', schema)