const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//user Schema with validations
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    //trims whitespace
    trim: true,
    minLength: 3
  }
}, {
  //add fields for creation date and modified date
  timestamps: true
});
//.model compiles a model for you. It makes a copy of the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
