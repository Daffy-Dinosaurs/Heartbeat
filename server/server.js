var express = require('express');
var webpack = require('webpack');
var path = require('path');

var config = require('../webpack.config.js');
var bodyParser = require('body-parser');
var db = require('./sequelizeDB.js');
var mysql = require('mysql');
var request = require('request');
var env = require('node-env-file');

// import React from 'react'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import counterApp from './reducers'
// import App from './src/app'
// import { renderToString } from 'react-dom/server'

// var data = require('./DataExtraction.js');

var env = env(__dirname + '/.env');
var TWITTER_CONSUMER_KEY = process.env.TWITTERAPIKEY;
var TWITTER_CONSUMER_SECRET = process.env.TWITTERSECRET;

var app = express();
var isDevelopment = (process.env.NODE_ENV !== 'production');
app.use(bodyParser());

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'))
  .get('/', function(req, res) {
    res.sendFile('index.html', {
      root: static_path,
    });
  }).listen(process.env.PORT || 8080, function(err) {
    if (err) { console.log(err); };

    console.log('Listening at localhost:8080');
  });

// console.log(__dirname + '/../index.html');

// we start a webpack-dev-server with our config

if (isDevelopment) {
  var config = require('./webpack.config');
  var WebpackDevServer = require('webpack-dev-server');
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
}

app.listen(port);
// console.log(db.Country.build().retrieveAll());

// create a user (accessed at POST http://localhost:3000/api/users)
// app.post('/api/countries', function(req, res) {
//   //TODO: Identify the request object. We need to send a post request through curl
//   console.log('inside post request', req);
//   var username = req.body.countryName; //bodyParser does the magic
//
//   var country = db.Country.build({ country: username });
//
//   country.add(function(success) {
//     res.json({ message: 'Country added!' });
//   },
//
// 	function(err) {
//   res.send(err);
// 	});
// });

//TODO: WORKING
app.get('/api/countries', function(req, res) {

  console.log('inside get request');
  db.Country.build().retrieveAll().then(function(countries) {
    // console.log('retrieveAll is being called', countries);
    if (countries) {
      res.json(countries);
      console.log('GETTING THE COUNTRIES');
    } else {
      res.send(401, 'Nah Man Country not found');
    }
  });
});

// update a user (accessed at PUT http://localhost:8080/api/users/:user_id)
// app.put(function(req, res) {
//   //This is using the same instance methods from our sequlize page
//   var country = db.Country.build();
//
//   country.username = req.body.username;
//
//   country.updateById(req.params.user_id, function(success) {
//     //console.log(success);
//     if (success) {
//       res.json({ message: 'User updated!' });
//     } else {
//       res.send(401, 'User not found');
//     }
//   }, function(error) {
//
//     res.send('User not found');
//   });
// });

//TODO: WORKING
app.get('/api/countries/:countryName', function(req, res) {

  db.Country.build().retrieveByName(req.params.countryName).then(function(country) {
    // console.log('inside retrieve by one', req.params.id);
    if (country) {
      res.json(country);
    } else {
      res.send(401, 'here is your country');
    }
  }, function(error) {

    res.send('not found');
  });
});

// delete a user by id (accessed at DELETE http://localhost:8080/api/users/:user_id)
// app.delete(function(req, res) {
//   var country = Country.build();
//
//   country.removeById(req.params.user_id, function(users) {
//     if (users) {
//       res.json({ message: 'User removed!' });
//     } else {
//       res.send(401, 'User not found');
//     }
//   }, function(error) {
//
//     res.send('User not found');
//   });
// });

//////////////////////////////////////////////////////////////////
//Set up and send a request for our application-only oAuth token.
///////////////////////////////////////////////////////////////////

// create a variable to hold our token.
var twitterAppToken;

// store our twitter key and secret
var consumerKey = TWITTER_CONSUMER_KEY;
var consumerSecret = TWITTER_CONSUMER_SECRET;

// concat the key and secret seperated by a colon.
var bearerTokenCred = consumerKey + ':' + consumerSecret;

// pass the key string into Buffer constructor to create a buffer obj.
var bufferedToken = new Buffer(bearerTokenCred);

// encode the buffer object in base64
var encodedAndBufferedToken = bufferedToken.toString('base64');

// set up options, you need quotes around keys with hyphens
var options = {
  url: 'https://api.twitter.com/oauth2/token',
  body: 'grant_type=client_credentials',
  method: 'POST',
  'Accept-Encoding': 'gzip',
  headers: {
    Authorization: 'Basic ' + encodedAndBufferedToken,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
};

// request and save an application-only token from twitter
request(options, function(err, response, body) {
  twitterAppToken = JSON.parse(body);
  console.log(twitterAppToken);
});

///////////////////////////////
// get tweets
///////////////////////////////

// here we set up the get handler that will send a request for the users tweet and then send it to our client-side app.
// route has one param, any user's twitter handle
app.get('/tweets/:hastag', function(req, ourResponse, next) {
  // set options
  console.log('FROM THE SERVER:', req.params.hastag);
  var options = {
    // append the user's handle to the url
    url: 'https://api.twitter.com/1.1/search/tweets.json?q=' + req.params.hastag,
    method: 'GET',
    headers: {
      // append the access token to the string Bearer with a space.
      Authorization: 'Bearer ' + twitterAppToken.access_token,
    },
  };

  // Send a get request to twitter, notice that the response that we send in the callback is the response from the outer-function passed in through closure.
  request(options, function(err, responseFromTwitter, body) {
    // console.log(JSON.parse(body));
    ourResponse.status(200).send(JSON.parse(body));
  });
});
