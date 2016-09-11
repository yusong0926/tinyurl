/**
 * Created by soyu on 2016-08-27.
 */
var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/index');
var useragent = require('express-useragent');
var urlServices = require('./services/urlService');

var mongoose = require('mongoose');

mongoose.connect('mongodb://user:user@ds013486.mlab.com:13486/tinyurl_sy');

urlServices.preLoadUrl();

app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/public', express.static(__dirname + "/public"));

app.use(useragent.express());

app.use('/api/v1', restRouter);

app.use('/', indexRouter);

app.use('/:shortUrl', redirectRouter);

app.listen(3000);