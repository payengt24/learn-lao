const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const VocabularySchema = new Schema({
    img_path: { type: String, required: true },
    mp3_path: { type: String, required: true },
});

module.exports = mongoose.model('vocabulary', VocabularySchema);
