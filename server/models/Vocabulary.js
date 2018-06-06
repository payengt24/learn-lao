const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const VocabularySchema = new Schema({
    vocabulary_img: { type: String, required: true },
    vocabulary_mp3: { type: String, required: true },
});

module.exports = mongoose.model('Vocabulary', VocabularySchema);
