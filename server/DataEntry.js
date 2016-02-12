var Sequelize = require('sequelize');
var fs = require('fs');
var async = require('async');
var csv = require('csv-parse');

var sequelize = new Sequelize('worldMapDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 1000,
  },
});

var WaterData = sequelize.define('waterdata', {
  localeId: Sequelize.INTEGER,
  countryName: Sequelize.STRING,
  year: Sequelize.INTERGER,
  percent: Sequelize.INTERGER,
});
