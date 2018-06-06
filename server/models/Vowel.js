const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const VowelSchema = new Schema({
    vowel_img: { type: String, required: true },
    vowel_mp3: { type: String, required: true },
});

module.exports = mongoose.model('Vowel', VowelSchema);
