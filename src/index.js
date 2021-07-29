const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars  = require('express-handlebars');

app.use(express.static(path.join(__dirname,'public')));

// support post data
app.use(express.urlencoded({  // middle ware xu ly submit data
  extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'))
//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log(__dirname);

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/search', (req, res) => {
  res.render('search')
})
app.post('/search', (req, res) => {

  console.log(req.body);
  res.send('')
})

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})