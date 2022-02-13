const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //Data// Content: title, artist, album, release year
    const emoSongs = [
        {
            "title": "510",
            "Artist": "Samra",
            "Album": "Jibrail & Iblis",
            "Release date": 2020
        },
        {
            "title": "Rausch",
            "Artist": "Samra",
            "Album": "Rohdiamant",
            "Release date": 2021
        },
        {
            "title": "Was dann?",
            "Artist": "Samra",
            "Album": "Rohdiamant",
            "Release date": 2021
        },
        {
            "title": "Was dann?",
            "Artist": "Samra",
            "Album": "Rohdiamant",
            "Release date": 2021
        },
        {
            "title": "Jolina",
            "Artist": "Samra",
            "Album": "Jibrail & Iblis",
            "Release date": 2020
        },
        {
            "title": "Kennst du das?!",
            "Artist": "Samra",
            "Album": "Rohdiamant",
            "Release date": 2021
        },
        {
            "title": "365 Tage",
            "Artist": "Samra",
            "Album": "Jibrail & Iblis",
            "Release date": 2020
        },
    ];
    res.json(emoSongs);
    console.log('sending emotional song request');
})

module.exports = router;