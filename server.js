const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
    console.log('Starting API');
});

//////////////////Routes//////////////////
const emoRouter = require('./routes/deep');
app.use('/deep', emoRouter);

const alphaRouter = require('./routes/alpha')
app.use('/alpha', alphaRouter)
//////////////////////////////////////////
app.listen(process.env.PORT || 6969);
