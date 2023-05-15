const express = require('express')
const app = express()
const path = require('path')
const  { engine } =require ('express-handlebars');
const route = require('./routes/');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
route(app);

app.use(express.static(path.join(__dirname, 'public/img')));
app.set('views', path.join(__dirname, 'views'));


app.listen(8080)