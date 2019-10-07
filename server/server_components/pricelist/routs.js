const express = require('express');
const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json(); /*We only going to use the jsonParser as middleware */
const handlers = require('./handlers');

const commonFunc = require('../common/common');

router.get('/pricelist', handlers.getPricelist );
router.get('/pricelist/:id', commonFunc.checkID, handlers.getPricelistById);
router.post('/pricelist',jsonParser, handlers.post ); 
router.patch('/pricelist/:id', jsonParser, commonFunc.checkID, handlers.patchById)
router.delete('/pricelist/:id', commonFunc.checkID,  handlers.deleteById)
//
/*
router.get('/pricelist', routes.employeesList.listAllEmployeesKnex);

router.get('/pricelist/:id', middlewares.checkID, routes.employeesList.listSingleEmployee);

router.post('/pricelist', jsonParser, routes.employeesList.postEmployee);

router.patch('/pricelist/:id', jsonParser, middlewares.checkID, routes.employeesList.updateEmployee)

router.delete('/pricelist/:id', middlewares.checkID, routes.employeesList.deleteEmployee)
*/

module.exports = router;
