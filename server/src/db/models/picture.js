const mongoose = require('mongoose')

//Define all of its fields
  /*name: {
    type: String,
    required: true
  },*/
const definition = {
  name: String
}

//Set any options for the schema
const options = {
  timestamps: true
}

//make the schema as a new instance of a mongoose schema, using our definition and options
const schema = new mongoose.Schema(definition, options)

//export that
module.exports = mongoose.model('Picture', schema)