const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//exercise Schema with 4 fields and validation
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true }
}, {
  //add fields for creation date and modified date
  timestamps: true
});
//.model compiles a model for you. It makes a copy of the schema
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
