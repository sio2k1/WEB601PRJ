// this file is combining all routs for price list

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json(); /*We only going to use the jsonParser as middleware */

const handlers = require('./handlers'); // file with actual handlers for current routes
const commonFunc = require('../common/common'); //common functions, like check if provided id is integer

const route_entry ='/articles' 

//creating routs:
router.get(route_entry, handlers.getAll);
router.get(route_entry+'/:id', commonFunc.checkID, handlers.getById);
//router.post(route_entry, jsonParser, handlers.post); 
//router.patch(route_entry+'/:id', jsonParser, commonFunc.checkID, handlers.patchById)
//router.delete(route_entry+'/:id', commonFunc.checkID,  handlers.deleteById)

module.exports = router;
