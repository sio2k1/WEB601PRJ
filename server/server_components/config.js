//This is config file, db connection located in knexfile.js
const path = require('path');

const dbPath=path.join(__dirname,'db','sdb.db'); //sqlite db path
const APIServerPort = 3001; // port

module.exports = {
    APIServerPort, dbPath
}






/* connection sample for mysql
const database = {
    host: 'localhost',
    port: 3306,
    user: 'root_legacy_auth',
    password: 'As151515',
    database: 'web601_test_db',
    insecureAuth: true
}*/