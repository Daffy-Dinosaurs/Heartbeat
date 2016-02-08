var Sequelize = require('sequelize');

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
  CountryName: Sequelize.STRING
  },
  {
    tableName: 'WaterPollution', // this will define the table's name
    timestamps: false           // this will deactivate the timestamp columns
});

WaterPollution.sync({ force : true })
.on('success', function () {
  console.log("Water Pollution Table Synced");
}).error(function (error) {
  console.log("Error synching Water Pollution Model");
  throw error;
});

module.exports = {
  WaterPollution : WaterPollution
}