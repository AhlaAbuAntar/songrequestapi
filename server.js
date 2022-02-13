const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello there, this is my API');
    res.status(404).send('Error, please type in a correct url');
    console.log('Starting API');
});

const emoRouter = require('./routes/emo');

app.use('/emo', emoRouter);

app.listen(8052);
