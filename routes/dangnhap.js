const express = require('express');
const route = express.Router();
const dangnhapcontroller = require('../app/controller/dangnhapcontroller');

route.use('/', dangnhapcontroller.index);
module.exports = route;