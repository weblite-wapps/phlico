//import mongoose, our ODM for mongoDB
const mongose = require('mongoose')

//Define all of its fields
const definition = {
  /*name: {
    type: String,
    required: true
  },*/
}

//Set any options for the schema
const options = {
  timestamps: true
}

//make the schema as a new instance of a mongoose schema, using our definition and options
const pictureSchema = new mongoose.Schema(definition, options)

//export that
module.exports = mongoose.model('Picture', pictureSchema)