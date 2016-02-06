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

//TODO: Review. This is an example I found online. I will be removing the password component and replacing it with the capital name

var Country = sequelize.define('country', {
    countryName: Sequelize.STRING,
  },

  {
    //these are just like the getter and setter method in th sequelize docs
    instanceMethods: {
      //TODO: read
      retrieveAll: function(onSuccess, onError) {
        console.log('feeling lucky');

        //TODO: make sure this is working correctly
        Country.findAll({});

      },

      // retrieveById: function(user_id, onSuccess, onError) {
      //   Country.findOne({ where: { id: user_id } }, { raw: true })
      // .success(onSuccess).error(onError);
      // },

      //TODO: create
      add: function(name) {
        var countryName = name;

        Country.build({ countryName: countryName })
        .save();
      },

      //TODO: update
      updateById: function(user_id, onSuccess, onError) {
        var id = user_id;
        var countryName = this.username;

        Country.update({ country: username }, { where: { id: id } });

      },

      //TODO: delete
      removeById: function(user_id, onSuccess, onError) {
        Country.destroy({ where: { id: user_id } });
      },
    },
  });

sequelize.sync().then(function() {
  console.log('this is synced');
});

Country.build().add('england');

// Country.build().retrieveAll();
module.exports = { Country: Country };

//Make it crud

// var User = sequelize.define('User', {
//   username: Sequelize.STRING,
//   location: Sequelize.STRING,
// });

//TODO: find out why these promises do not work
// sequelize.sync().then(function() {
//   return User.create({
//     username: 'Tommy Boy',
//     location: '',
//   });
// }).then(function(tommy) {
//   tommy.update({ location: 'Compton, CA' });
// });

// .then(function(tommy) {
//   tommy.update({
//     location: 'Compton, CA',
//   });
// });

// User.findAll().then(function(countries) {
//   console.log(countries.length);
// });

// User.update({
//   username: 'Tommy Gun',
// }).then(function(tommy) {
//   console.log(tommy.get({
//
//   }))
// })

// })
