// We are going to create a config file for our database connection
// We are going to call that object database. 
// We are going to specify a host port 
// And since an config file we can create an API server port var and export as well

const APIServerPort = 3000

/*
const database = {
    host: 'localhost',
    port: 3306,
    user: 'root_legacy_auth',
    password: 'As151515',
    database: 'web601_test_db',
    insecureAuth: true
}*/


// Then we export it
module.exports = {
    APIServerPort
}