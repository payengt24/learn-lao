const express = require('express');
const router = express.Router();
const Vowel = require('../models/Vowel');


router.get('/', (req, res) => {
    console.log('GET /api/vowel');
    Vowel.find({}).then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log('Error GET /api/Vowel', error)
        res.sendStatus(500);
    });
})

module.exports = router;