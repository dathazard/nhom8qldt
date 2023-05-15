const express = require('express');
const route = express.Router();
const Newcontroller = require('../app/controller/Newcontroller');

route.use('/', Newcontroller.index);
module.exports = route;