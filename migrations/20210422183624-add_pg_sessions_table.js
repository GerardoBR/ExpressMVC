'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('session', {
      sid: {
        type: Sequelize.STRING,
        primaryKey: true
        
      },
      sess: {
        type: Sequelize.JSON
      },
      expire: {
        allowNull: false,
        type: 'TIMESTAMP'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('session');
  }
};
