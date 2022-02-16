const express = require('express');
const deep = require('../tracklists/deep.json');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(deep);
    console.log('sending deep song request');
});

module.exports = router;