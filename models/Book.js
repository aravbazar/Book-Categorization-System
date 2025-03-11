const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    ageGroup: { type: String, required: true },
    readingLevel: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
