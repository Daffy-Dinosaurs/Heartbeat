var Sequelize = require('sequelize');
var mysql = require('mysql');

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
    countryName: Sequelize.STRING,
  },

  {
    //these are just like the getter and setter method in th sequelize docs
    instanceMethods: {
      //TODO: read
      retrieveAll: function() {
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
      retrieveById: function(id) {
        Country.findOne({ where: { id: id } });
      },

      //TODO: WORKING
      add: function(name) {
        var countryName = name;

        Country.build({ countryName: countryName });
      },

      //TODO: WORKING
      updateById: function(id, newName) {
        var id = id;
        var countryName = newName;

        Country.update({ countryName: countryName }, { where: { id: id } });

      },

      //TODO: WORKING
      removeById: function(id) {
        Country.destroy({ where: { id: id } });
      },
    },
  });

sequelize.sync().then(function() {
  console.log('this is synced');
});

// console.log(Country.build().retrieveById(3));

// Country.build().retrieveAll();
module.exports = { Country: Country };
