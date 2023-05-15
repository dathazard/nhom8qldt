const express = require('express');
const route = express.Router();
const labtop = require('../app/controller/labtop')

route.use('/', labtop.index);
module.exports = route;