var Sequelize = require('sequelize');
var fs = require('fs'),
    async = require('async'),
    csv = require('csv-parse');


var raw_data = fs.readFileSync(__dirname + "/../Datasets/test.json", "utf-8");
// console.log("\n\n\nRAW DATA", raw_data);

var cleandata = JSON.parse(raw_data);
// console.log("\n\n--------", typeof cleandata);
// var row = cleandata.split(',')
// console.log("SPLIT DATA", row);



  

/*var parser = csv.parse({
  columns: true,
  relax: true
});*/

var sequelize = new Sequelize('worldMapDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 1000,
  },

});

// in your server file - e.g. app.js
// var WaterPollution = sequelize.import(data);

// var Project = sequelize.define('Project', {
//   title: Sequelize.STRING,
//   description: Sequelize.TEXT
// })

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

var WaterPollution = sequelize.define('WaterPollution', {
  CountryName: Sequelize.STRING
  },
  {
    tableName: 'WaterPollution', // this will define the table's name
    timestamps: false           // this will deactivate the timestamp columns
  });

var User = sequelize.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
}, {
  tableName: 'my_user_table', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
})


//------------------------------------------------------------------------
// Create the Database
//------------------------------------------------------------------------
sequelize.sync().then(function() {
  return User.create({
    username: 'Tommy Boy',
  });
}).then(function(tommy) {
  console.log(tommy.get({
    plain: true,
  }));
});

for (var i = 0; i < cleandata.length; i++) {
  WaterPollution.create(
    { CountryName : cleandata[i].CountryName }
  )
}

// for (var row in cleandata) {
// WaterPollution
// .create([ 
//   { CountryName : cleandata[row] }
// ])
// .save()
// .success(function() {

// })
// }

//------------------------------------------------------------------------
// Deleting Data from the Database
//------------------------------------------------------------------------

