//express app start file, we combine all routes, connect to DB and start listening here

const express = require('express');
const app = express();
const config = require('./config')
const pricelistRouts = require('./pricelist/routs') // get pl routes
const articleRouts = require('./articles/routs') // get article routes
const knexcfg = require('./knexfile')
const knex = require('knex')(knexcfg); // load DB connection file

const start = () => {

    app.locals.knex = knex; // set knex as locals.knex, so we can later use it from other parts of app

    app.use((req, res, next) => { //this is cors fix part, which will allow us to answer API requests
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    app.use('/api', pricelistRouts,articleRouts); // combine routes

    app.listen(config.APIServerPort, "0.0.0.0",  () => { // start listening at every single IP in system, not only at localhost
        console.log(`Server started on port ${config.APIServerPort}`);
    });
}
module.exports = {start};

