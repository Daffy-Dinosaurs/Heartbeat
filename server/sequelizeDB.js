var Sequelize = require('sequelize');
var mysql = require('mysql');
var CountryStatistic = require('./country-stats-model.js');

//TODO: Am I adding the instantion of the database in the wrong file?

var sequelize = new Sequelize('worldMapDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 1000,
  },

});

//TODO: These methods successfully perform our CRUD operations

var Country = sequelize.define('country', {
    localeId: Sequelize.INTEGER,
    countryName: Sequelize.STRING,
  },
  {
    //these are just like the getter and setter method in th sequelize docs
    instanceMethods: {
      //TODO: read
      retrieveAll: function () {
        // console.log('feeling lucky');

        //TODO: WORKING
        return Country.findAll({});

        // .then(function(countries) {
        //   if (countries) {
        //     res.json(countries);
        //   } else {
        //     res.send(401, 'Country not found');
        //   }
        // }, function(error) {
        //
        //   res.send('Country not found');
        // });

      },

      //TODO: Having troubel viewing whether this is called correctly of not. SQL query looks right.
      retrieveByName: function (passedInName) {
        return Country.findOne({ where: { countryName: passedInName } });
      },

      //TODO: WORKING
      add: function (name) {
        // var countryName = name;
        // console.log('this is being called with', name);
        return Country.build({ countryName: name }).save();
      },

      //TODO: WORKING
      updateByName: function (passedInName, newName) {
        // console.log('update is being called', passedInName, newName);
        return Country.update({ countryName: newName }, { where: { countryName: passedInName } });

      },

      //TODO: WORKING
      removeById: function (id) {
        Country.destroy({ where: { id: id } });
      },
    },
  });

Country.hasMany(CountryStatistic, { foreignKey: 'id' });

sequelize.sync().then(function () {
  console.log('this is synced');
});

//this worked
// Country.build().add('blainville');
module.exports = { Country: Country };
