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

var WaterPollution = sequelize.define('WaterPollution', {
  _1990: Sequelize.FLOAT,
  _1991: Sequelize.FLOAT,
  // _1992: Sequelize.Number,
  // _1993: Sequelize.Number,
  // _1994: Sequelize.Number,
  // _1995: Sequelize.Number,
  // _1996: Sequelize.Number,
  // _1997: Sequelize.Number,
  // _1998: Sequelize.Number,
  // _1999: Sequelize.Number,
  // _2000: Sequelize.Number,
  // _2001: Sequelize.Number,
  // _2002: Sequelize.Number,
  // _2003: Sequelize.Number,
  // _2004: Sequelize.Number,
  // _2005: Sequelize.Number,
  // _2006: Sequelize.Number,
  // _2007: Sequelize.Number,
  // _2008: Sequelize.Number,
  // _2009: Sequelize.Number,
  // _2010: Sequelize.Number,
  // _2011: Sequelize.Number,
  // _2012: Sequelize.Number,
  // _2013: Sequelize.Number,
  // _2014: Sequelize.Number,
  // _2015: Sequelize.Number,
  CountryName: Sequelize.STRING,
  CountryCode: Sequelize.STRING
  // IndicatorName : Sequelize.STRING,
  },
  {
    tableName: 'WaterPollution', // this will define the table's name
    timestamps: false           // this will deactivate the timestamp columns
  });


var raw_data = fs.readFile(__dirname + "/../Datasets/test2.json", "utf-8", function(err, data){
  console.log(typeof data);
  var cleandata = JSON.parse(data);
  console.log(typeof cleandata);

  if (err) {
    console.log(err);
  } else {
    console.log(cleandata);

    
      sequelize.sync({ force: true }).then(function(err) {
        
        for (var i = 0; i < cleandata.length; i++) {
          
            WaterPollution.create({
              CountryName : cleandata[i]["Country Name"],
              CountryCode : cleandata[i]["Country Code"],
              _1990 : cleandata[i]["1990"],
              _1991 : cleandata[i]["1991"]
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

