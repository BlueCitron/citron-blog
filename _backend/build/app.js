"use strict";

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var logger = require('morgan');

var mongoose = require('mongoose'); //var indexRouter = require('./routes/index');


var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', _index.default);

function initDB() {
  mongoose.connect('mongodb://49.247.204.250/bluecitron', {
    useNewUrlParser: true
  });
  mongoose.connection.once('open', function () {
    console.log('DB Connection established.');
  });
}

initDB();
module.exports = app;