const express = require('express');
const router = express.Router();
const Consonant = require('../models/Consonant');


router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('GET /api/consonant');
        Consonant.find({}).then((result) => {
            res.send(result);
        }).catch((error) => {
            console.log('Error GET /api/consonant', error)
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
})


module.exports = router;