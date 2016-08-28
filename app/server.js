/**
 * Created by soyu on 2016-08-27.
 */
var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/index');

var mongoose = require('mongoose');

mongoose.connect('mongodb://user:user@ds013486.mlab.com:13486/tinyurl_sy');


app.use('/public', express.static(__dirname + "/public"));

app.use('/api/v1', restRouter);

app.use('/', indexRouter);

app.use('/:shortUrl', redirectRouter);

app.listen(3000);