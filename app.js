'use strict';

const express = require('express');
const app = express();

app.set('views', './server/views');
app.set('view engine', 'pug');

app.use(express.static('src'));

app.get('/', (req, res) => res.render('index', {
  title: 'webpack2'
}));


app.listen(8000);
console.log('start');
