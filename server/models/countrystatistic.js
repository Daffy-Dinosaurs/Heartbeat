'use strict';
module.exports = function(sequelize, DataTypes) {
  var CountryStatistic = sequelize.define('CountryStatistic', {
    year: DataTypes.INTEGER,
    value: DataTypes.FLOAT,
    category: DataTypes.STRING,
    CountryId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        CountryStatistic.belongsTo(models.Country, { foreignKey: 'CountryId'});
      }
    }
  }, {
    timestamps: false
  });
  return CountryStatistic;
};

// TODO
// Fix foreign key. relationship is created by countryid. Id needs to be set in seed.
