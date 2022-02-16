const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello there, this is my API');
    res.status(404).send('Error, please type in a correct url');
    console.log('Starting API');
});


//////////////////Routes//////////////////
const emoRouter = require('./routes/deep');
app.use('/emo', emoRouter);

const alphaRouter = require('./routes/alpha')
app.use('/alpha', alphaRouter)
//////////////////////////////////////////
app.listen(process.env.PORT || 6969);
