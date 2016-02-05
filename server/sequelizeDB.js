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

var User = sequelize.define('User', {
  username: Sequelize.STRING,
});

sequelize.sync().then(function() {
  return User.create({
    username: 'Tommy Boy',
  });
}).then(function(tommy) {
  console.log(tommy.get({
    plain: true,
  }));
});
