//this is config file, bud db connection moved to knexfile.js

const APIServerPort = 3001; // port

// Then we export it
module.exports = {
    APIServerPort
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