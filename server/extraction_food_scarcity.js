var Sequelize = require('sequelize');
var fs = require('fs');
var async = require('async');
var csv = require('csv-parse');

var model = require('./models/index.js');

// var models = require('./models/country');

var sequelize = new Sequelize('worldMapDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 1000,
  },

});

// Read in the data from the file system
fs.readFile(__dirname + '/../datasets/food_scarcity.json', 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  }

  var cleanData = JSON.parse(data);

  // Init loop function to iterate through the data array one object at a time.
  function initLoop(i) {
      if (i === cleanData.length) {
        return;
      }

      var allStats = [];
      var statKeys = Object.keys(cleanData[i]);
      var count = 0;

      // recursive function to iterate through each object and parse out the data
      function asyncForLoop(count, obj) {
        // base case to check if we are at the end of the object
        if (count === statKeys.length) {
          return;
        }

        // create foreign keys by finding the country realted to the data being parsed
        return model.Country.findOne({ where: { countryName: obj['Country Name'] },
          }).then(function (country) {
            // Build the Country Statistic model instance
            if (statKeys[count].length === 4) {
              allStats.push({
              year: statKeys[count],
              value: obj[statKeys[count]],
              category: 'Food Scarcity',
              CountryId: country.id,
              createdAt: new Date(),
              updatedAt: new Date()
            });
            }

            // recurse to the next key in the object
            return asyncForLoop(count + 1, obj);
          });
      }

      return asyncForLoop(0, cleanData[i]).then(function () {
        // Bulk insert all rows into DB
        model.CountryStatistic.bulkCreate(allStats);

        // increment array
        return initLoop(i + 1);
      });
    }

  initLoop(0).then(function () {
      console.log('Start');
    });
});
