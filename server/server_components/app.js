const express = require('express');
const app = express();
const config = require('./config')
const pricelist_routs = require('./pricelist/routs')

const knexcfg = require('./knexfile')

const knex = require('knex')(knexcfg);


const start_ = () => {

    app.locals.knex = knex; 
    app.use('/api', pricelist_routs);
    app.listen(config.APIServerPort, () => {
        console.log(`Server started on port ${config.APIServerPort}`);
    });
}

module.exports = {start_};

