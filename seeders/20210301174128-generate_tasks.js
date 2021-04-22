'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Tasks', [
      {id : 1, description : 'Grabar el curso de back' ,createdAt :new Date(),updatedAt :new Date()},
      {id : 2, description : 'Editar el curso de back' ,createdAt :new Date(),updatedAt :new Date()},
      {id : 3, description : 'Subir el curso de back' ,createdAt :new Date(),updatedAt :new Date()}
      
    ], {});
    

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Tasks', null, {});
 
  }
};
