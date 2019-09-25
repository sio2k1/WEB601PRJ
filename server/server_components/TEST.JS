const express = require('express');
const app = express();
const router = express.Router();
const config = require('./config')
const knexcfg = require('./knexfile')

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json(); /*We only going to use the jasonParser as middleware */

const knex = require('knex')(knexcfg);

// router.get('/employees', routes.employeesList.listAllEmployees); // This line is for mysql native package
router.get('/pricelist', routes.employeesList.listAllEmployeesKnex);
/* Here we are going to get a single employee by accessing id parameter */
router.get('/pricelist/:id', middlewares.checkID, routes.employeesList.listSingleEmployee);
/* Now we are going to POST to the employees list but we need to make sure to create a need record in db*/
router.post('/pricelist', jsonParser, routes.employeesList.postEmployee);
/* Now we are going to use PATCH to update employee data, so we need to create a handler function*/
router.patch('/pricelist/:id', jsonParser, middlewares.checkID, routes.employeesList.updateEmployee)
/* Now we are going to use DELETE to remove an employee from the table */
router.delete('/pricelist/:id', middlewares.checkID, routes.employeesList.deleteEmployee)

app.use('/api', router);


app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort}`);
});

console.log("sss");
