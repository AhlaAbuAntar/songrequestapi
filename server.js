const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('Starting API');
});

//////////////////Routes//////////////////
const deepRouter = require('./routes/deep');
app.use('/deep', deepRouter);

const alphaRouter = require('./routes/alpha')
app.use('/alpha', alphaRouter);
//////////////////////////////////////////
app.listen(process.env.PORT || 6969);
