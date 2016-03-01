var express = require('express');
var webpack = require('webpack');
var path = require('path');
var bodyParser = require('body-parser');
var config = require('../webpack.config.js');
var model = require('./models/index.js');
var Sequelize = require('sequelize');
var mysql = require('mysql');
var request = require('request');
var env = require('node-env-file');

////////For data extraction only//////////
// var data = require('./extraction.js');

// var data = require('./extraction_food_scarcity.js');

// var data = require('./extraction_poverty.js');

//////////////////////////////////////////

var env = env(__dirname + '/.env');
var TWITTER_CONSUMER_KEY = process.env.TWITTERAPIKEY;
var TWITTER_CONSUMER_SECRET = process.env.TWITTERSECRET;

var isDevelopment = (process.env.NODE_ENV !== 'production');

var app = express();

// var isDevelopment = (process.env.NODE_ENV !== 'production');
app.use(bodyParser());

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'));

if (process.env.NODE_ENV === 'production') {
  var static_path = path.join(__dirname, 'public');

  app.use(express.static(static_path))
    .get('/', function (req, res) {
      res.sendFile('index.html', {
        root: static_path,
      });
    }).listen(process.env.PORT || 8080, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Listening at localhost:', process.env.PORT);
      }
    });
} else {

  var WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
      hot: true,
      historyApiFallback: true,
      proxy: {
        '*': 'http://localhost:3000',
      },
    }).listen(3001, 'localhost', function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Listening at localhost:3001');
      }

    });

  app.listen(port);
}

// get all countries
app.get('/api/countries', function (req, res) {
  model.Country.findAll({}).then(function (countries) {
    if (countries) {
      res.status(200).send(countries);
    } else {
      res.status(404).send('Not Found');
    }
  });
});

// get all stats
app.get('/api/statistics', function (req, res) {
  model.CountryStatistic.findAll({ include: [
    { model: model.Country,
      as: model.Country.id, }, ],
 }).then(function (stats) {
    if (stats) {
      res.status(200).send(stats);
    } else {
      res.status(404).send('Not Found');
    }
  });
});

// Get individual Country Name
app.get('/api/countries/:countryName', function (req, res) {
  model.Country.findOne({ where: { countryName: req.params.countryName } }).then(function (country) {
    if (country) {
      res.status(200).send(country);
    } else {
      res.status(404).send('Country not Found');
    }
  });
});

// Get individual Country Stats
app.get('/api/statistics/:CountryId', function (req, res) {
  model.CountryStatistic.findAll({
    where: {
      CountryId: req.params.CountryId,
    },
    include:[{
      model: model.Country,
      as: model.Country.id,
    }, ],
  }).then(function (stats) {
    if (stats) {
      res.status(200).send(stats);
    }else {
      res.status(404).send('Not Found');
    }
  });
});

//additional call

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
request(options, function (err, response, body) {
  twitterAppToken = JSON.parse(body);
});

///////////////////////////////
// get tweets
///////////////////////////////

// here we set up the get handler that will send a request for the users tweet and then send it to our client-side app.
// route has one param, any user's twitter handle
app.get('/tweets/:hastag', function (req, ourResponse, next) {
  // set options
  console.log('FROM THE SERVER:', req.params.hastag);
  var options = {
    // append the user's handle to the url
    url: 'https://api.twitter.com/1.1/search/tweets.json?q=-RT' + req.params.hastag,
    method: 'GET',
    headers: {
      // append the access token to the string Bearer with a space.
      Authorization: 'Bearer ' + twitterAppToken.access_token,
    },
  };

  // Send a get request to twitter, notice that the response that we send in the callback is the response from the outer-function passed in through closure.
  request(options, function (err, responseFromTwitter, body) {
    // console.log(JSON.parse(body));
    ourResponse.status(200).send(JSON.parse(body));
  });
});

///////////////////////////////////////////////////////////////////
// Set up Request for the News Feed from the Guardian            //
///////////////////////////////////////////////////////////////////
