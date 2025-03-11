const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

router.post('/books', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
