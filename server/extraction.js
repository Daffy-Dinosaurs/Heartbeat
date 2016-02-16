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
fs.readFile(__dirname + '/../Datasets/Improved_Water_Resource.json', 'utf-8', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    var cleanData = JSON.parse(data), stats = [];

    var allStats = [];
      for (var i = 0; i < cleanData.length; i++){

        var statKeys = Object.keys(cleanData[i])
        var count = 0;
        console.log("Length of statKeys.length", statKeys.length);

        function asyncForLoop(count, obj){
          if ( count === statKeys.length){
            return;
          }

          return model.Country.findOne({ where: {countryName: obj["Country Name"] }
          }).then(function(country){
          //recurse
          if (statKeys[count].length === 4){
            allStats.push({
              year: statKeys[count],
              value: obj[statKeys[count]],
              category: "Water Pollution",
              CountryId: country.id
            })
          }

          return asyncForLoop(count+1, obj);
          });

        }

        asyncForLoop(1, cleanData[i]).then(function(){
          console.log("this is allStats", allStats);
          model.CountryStatistic.bulkCreate(allStats);
        });
      }

  }
});
