const express = require('express');
const app = express();
const config = require('./config')
const pricelist_routs = require('./pricelist/routs')

const knexcfg = require('./knexfile')

const knex = require('knex')(knexcfg);


const start_ = () => {

    app.locals.knex = knex; 

    app.use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    app.use('/api', pricelist_routs);
    app.listen(config.APIServerPort, () => {
        console.log(`Server started on port ${config.APIServerPort}`);
    });
}

module.exports = {start_};

