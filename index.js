const express = require('express')
const app = express()
const path = require('path')
const  { engine } =require ('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public/img')));
app.set('views', path.join(__dirname, 'views'));
app.get('/', function (req, res) {
  res.render('trangchu')
})

app.listen(8080)