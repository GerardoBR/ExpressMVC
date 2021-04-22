'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Tasks','userId',{
      type :Sequelize.INTEGER,
      refences:{
        model :{
          tableName : 'User'
        },
        key: 'id'
      }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Tasks','userId');
  }
};
