'use strict';
module.exports = function (sequelize, DataTypes) {
  var Country = sequelize.define('Country', {
    localeId: DataTypes.INTEGER,
    countryName: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Country.hasMany(models.CountryStatistic);
      },
    },
  });
  return Country;
};
