var Sequelize = require('sequelize');
var fs = require('fs');
var async = require('async');
var csv = require('csv-parse');
var CountryStatistics = require('./country-stats-model');

var sequelize = new Sequelize('worldMapDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 1000,
  },

});

// var Country = sequelize.define('country', {
//   localeId: Sequelize.INTEGER,
//   countryName: Sequelize.STRING,
// });

// {
//   // tableName: 'countries', // this will define the table's name
//   timestamps: false           // this will deactivate the timestamp columns
// });

var rawData = fs.readFile(__dirname + '/../Datasets/Improved_Water_Resource.json', 'utf-8', function(err, data) {
  console.log(typeof data);
  var cleanData = JSON.parse(data);
  console.log(typeof cleanData);

  if (err) {
    console.log(err);
  } else {
    console.log(cleanData);

    sequelize.sync({ force: true }).then(function(err) {

      for (var i = 0; i < cleanData.length; i++) {

        CountryStatistics.create({
          
          year: cleanData[i].countryName,
          value: cleanData[i].value,
          category: cleanData[i].category
          // CountryCode : cleandata[i]["Country Code"]

        }).then(function(data) {
              console.log('DATABASE: Data entered!');
            });
      }

    });
  }
});

//------------------------------------------------------------------------
// Create the Database
//------------------------------------------------------------------------

// sync the model with the database
// force true, cleans the data before loading it back in again.
// sequelize.sync({ force: true }).then(function(err) {

//       for (var i = 0; i < cleandata.length; i++) {

//         WaterPollution.create({
//           CountryName : cleandata[i]["Country Name"],
//           CountryCode : cleandata[i]["Country Code"],
//           _1990 : cleandata[i]["1990"],
//           _1991 : cleandata[i]["1991"]
//         }).then(function(data) {
//           console.log("DATABASE: Data entered!");
//         });
//       }
//   });

//------------------------------------------------------------------------
// Deleting Data from the Database
//------------------------------------------------------------------------
