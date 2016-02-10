var Sequelize = require('sequelize');
var fs = require('fs'),
    async = require('async'),
    csv = require('csv-parse');

var sequelize = new Sequelize('worldMapDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 1000,
  },

});

var Country = sequelize.define('country', {
  localeId: Sequelize.INTEGER,
  countryName: Sequelize.STRING
});

  // {
  //   // tableName: 'countries', // this will define the table's name
  //   timestamps: false           // this will deactivate the timestamp columns
  // });


var raw_data = fs.readFile(__dirname + "/../Datasets/countries.json", "utf-8", function(err, data){
  console.log(typeof data);
  var cleandata = JSON.parse(data);
  console.log(typeof cleandata);

  if (err) {
    console.log(err);
  } else {
    console.log(cleandata);


      sequelize.sync({ force: true }).then(function(err) {

        for (var i = 0; i < cleandata.length; i++) {

            Country.create({

              countryName : cleandata[i]["countryName"],
              localeId: cleandata[i]["localeId"]
              // CountryCode : cleandata[i]["Country Code"]

            }).then(function(data) {
              console.log("DATABASE: Data entered!");
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
