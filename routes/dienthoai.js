const express = require('express');
const route = express.Router();
const Dienthoaicontroller = require('../app/controller/Dienthoaicontroller');

route.use('/', Dienthoaicontroller.index);
module.exports = route;