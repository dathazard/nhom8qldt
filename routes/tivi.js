const express = require('express');
const route = express.Router();
const Tivi = require('../app/controller/tivicontroller')

route.use('/',Tivi.index);
module.exports = route;