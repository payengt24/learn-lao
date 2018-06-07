const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const PersonSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  favorites: [{
    type: {type: String, required: true},
    img_path: {type: String, required: true},
    mp3_path: {type: String, required: true},
    comment: {type: String},
  }],
});



module.exports = mongoose.model('Person', PersonSchema);
