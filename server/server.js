var express = require('express');
var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');

var app = express();
var db = require('./sequelizeDB.js');
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'));

// console.log(__dirname + '/../index.html');
app.listen(port);

// we start a webpack-dev-server with our config
new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  proxy: {
    "*": "http://localhost:3000"
  }
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
   console.log('Listening at localhost:3001');
});

console.log('karun says server works');
