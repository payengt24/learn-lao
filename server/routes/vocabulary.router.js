const express = require('express');
const router = express.Router();
const Vocabulary = require('../models/Vocabulary');

Vocabulary.find()
.then(result => {
    console.log(result);
});

router.get('/', (req, res) => {
    console.log('GET /api/vocabulary');
    // console.log(Vocabulary);
    Vocabulary.find({}).then((result) => {
        console.log(result);
        res.send(result);
    }).catch((error) => {
        console.log('Error GET /api/vocabulary', error)
        res.sendStatus(500);
    });
})


module.exports = router;