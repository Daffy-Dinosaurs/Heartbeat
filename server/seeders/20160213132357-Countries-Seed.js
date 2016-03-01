'use strict';
var fs = require('fs');
var path = require('path');

module.exports = {
  up: function (queryInterface, Sequelize) {
    var countriesArray = [];
    fs.readFile(__dirname + '/../../datasets/countries.json', 'utf-8', function (err, data) {
        var cleanData = JSON.parse(data);
        if (err) {
          console.log(err);
        } else {
          for (var i = 0; i < cleanData.length; i++) {
            countriesArray.push({
              localeId: cleanData[i].localeId,
              countryName: cleanData[i].countryName,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          }

          // console.log(countriesArray);
          return queryInterface.bulkInsert('Countries', countriesArray);
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Countries');
  },
};
