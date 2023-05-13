const express = require('express')
const app = express()
const  { engine } =require ('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.get('/', function (req, res) {
  res.render('trangchu')
})

app.listen(8080)