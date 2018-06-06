const express = require('express');
const router = express.Router();
const Consonant = require('../models/Consonant');


router.get('/', (req, res) => {
    console.log('GET /api/consonant');
    Consonant.find({}).then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log('Error GET /api/Consonant', error)
        res.sendStatus(500);
    });
})


module.exports = router;