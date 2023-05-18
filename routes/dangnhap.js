const express = require('express');
const route = express.Router();
const dangnhapcontroller = require('../app/controller/dangnhapcontroller');

route.post('/check',dangnhapcontroller.checkdangnhap);
route.get('/', dangnhapcontroller.index);
module.exports = route;