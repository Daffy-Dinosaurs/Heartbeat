'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('CountryStatistics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.FLOAT
      },
      category: {
        type: Sequelize.STRING
      },
      CountryId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
            allowNull: false,
            type: Sequelize.DATE
      },
      updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('CountryStatistics');
  }
};
