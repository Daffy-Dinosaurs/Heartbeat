var Sequelize = require('sequelize');
var fs = require('fs'),
    async = require('async'),
    csv = require('csv-parse');

var sequelize = new Sequelize('worldmapdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 1000,
  },

});

var WaterPollution = sequelize.define('WaterPollution', {
  // _1990: Sequelize.FLOAT,
  // _1991: Sequelize.FLOAT,
  // _1992: Sequelize.FLOAT,
  // _1993: Sequelize.FLOAT,
  // _1994: Sequelize.FLOAT,
  // _1995: Sequelize.FLOAT,
  // _1996: Sequelize.FLOAT,
  // _1997: Sequelize.FLOAT,
  // _1998: Sequelize.FLOAT,
  // _1999: Sequelize.FLOAT,
  // _2000: Sequelize.FLOAT,
  // _2001: Sequelize.FLOAT,
  // _2002: Sequelize.FLOAT,
  // _2003: Sequelize.FLOAT,
  // _2004: Sequelize.FLOAT,
  // _2005: Sequelize.FLOAT,
  // _2006: Sequelize.FLOAT,
  // _2007: Sequelize.FLOAT,
  // _2008: Sequelize.FLOAT,
  // _2009: Sequelize.FLOAT,
  // _2010: Sequelize.FLOAT,
  // _2011: Sequelize.FLOAT,
  // _2012: Sequelize.FLOAT,
  // _2013: Sequelize.FLOAT,
  // _2014: Sequelize.FLOAT,
  // _2015: Sequelize.FLOAT,
  CountryName: Sequelize.STRING
  // CountryCode: Sequelize.STRING
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
    
              // _1990 : cleandata[i]["1990"],
              // _1991 : cleandata[i]["1991"],
              // _1992 : cleandata[i]["1992"],
              // _1993 : cleandata[i]["1993"],
              // _1994 : cleandata[i]["1994"],
              // _1995 : cleandata[i]["1995"],
              // _1996 : cleandata[i]["1996"],
              // _1997 : cleandata[i]["1997"],
              // _1998 : cleandata[i]["1998"],
              CountryName : cleandata[i]["Country Name"]
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

