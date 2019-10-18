// config file for knex to connect sqlite DB
// this one check if DB file exists.
const config = require('./config')

const fs = require('fs');

dbPath=config.dbPath; // combining path to db
knexCfg={}

try {
  if (fs.existsSync(dbPath)) {
    knexCfg = {
        client: 'sqlite3',
        connection: {filename: dbPath}
    }
  } else
  {
    console.error("Cannot find SQLight database on "+dbPath+" Please check /server_components/config.js")
  } 
} catch(err) {
  console.error(err)
}

module.exports =  knexCfg;


