const express = require('express');
const alpha = require('../tracklists/alpha.json');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(alpha);
    console.log('sending alpha song request');
})

module.exports = router;