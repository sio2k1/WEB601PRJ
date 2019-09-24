/* 
npm install --save-dev nodemon
Package json -> 
"start": "nodemon SCRIPTNAME.js"
*/


const data = require('./sample_data.json');
const express = require('express');
let app = express()

app.use('/about',  (req, res, next) =>  {
    res.send('about')
    next();
})

//console.log(222);

const port = 3000;

app.listen(port, 
    () => {console.log('Open at localhost:'+port)}
)