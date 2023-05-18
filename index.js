const express = require('express')
const app = express()
const path = require('path')
const  { engine } =require ('express-handlebars');
const db = require('./db/db')
const route = require('./routes/');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
route(app);

app.use(express.static(path.join(__dirname, 'public/img')));
app.set('views', path.join(__dirname, 'views'));
db.connect();

app.listen(8080)