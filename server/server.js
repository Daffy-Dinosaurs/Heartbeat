var express = require('express');
var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');
var bodyParser = require('body-parser');
var db = require('./sequelizeDB.js');
var mysql = require('mysql');

var app = express();
app.use(bodyParser());

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'));

// console.log(__dirname + '/../index.html');
app.listen(port);

// we start a webpack-dev-server with our config
new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  proxy: {
    '*': 'http://localhost:3000',
  },
}).listen(3001, 'localhost', function(err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3001');
});

// console.log(db.Country.build().retrieveAll());

// create a user (accessed at POST http://localhost:3000/api/users)
app.post('/users', function(req, res) {
  //console.log('inside post request', req);
  var username = req.body.username; //bodyParser does the magic

  var country = db.Country.build({ country: username });

  country.add(function(success) {
    res.json({ message: 'Country added!' });
  },

	function(err) {
  res.send(err);
	});
});

// get all the users (accessed at GET http://localhost:8080/api/users)
app.get('/users', function(req, res) {
  var country = db.Country.build();

  country.retrieveAll(function(users) {
    if (users) {
      res.json(users);
    } else {
      res.send(401, 'Country not found');
    }
  }, function(error) {

    res.send('Country not found');
  });
});

// update a user (accessed at PUT http://localhost:8080/api/users/:user_id)
app.put(function(req, res) {
  //This is using the same instance methods from our sequlize page
  var country = db.Country.build();

  country.username = req.body.username;

  country.updateById(req.params.user_id, function(success) {
    //console.log(success);
    if (success) {
      res.json({ message: 'User updated!' });
    } else {
      res.send(401, 'User not found');
    }
  }, function(error) {

    res.send('User not found');
  });
});

// get a user by id(accessed at GET http://localhost:8080/api/users/:user_id)
app.get(function(req, res) {
  var country = db.Country.build();

  country.retrieveById(req.params.user_id, function(users) {
    if (users) {
      res.json(users);
    } else {
      res.send(401, 'User not found');
    }
  }, function(error) {

    res.send('User not found');
  });
});

// delete a user by id (accessed at DELETE http://localhost:8080/api/users/:user_id)
app.delete(function(req, res) {
  var country = Country.build();

  country.removeById(req.params.user_id, function(users) {
    if (users) {
      res.json({ message: 'User removed!' });
    } else {
      res.send(401, 'User not found');
    }
  }, function(error) {

    res.send('User not found');
  });
});
