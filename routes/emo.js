const express = require('express');
const emo = require('../tracklists/emo.json');
const router = express.Router();

router.get('/tracks', (req, res) => {
    res.json(emo);
    console.log('sending emotional song request');
})

module.exports = router;