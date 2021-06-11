'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


     return queryInterface.bulkInsert('tasks', [
       { id: 1, description: 'John Doe', createdAt: new Date(), updatedAt: new Date()},
       { id: 2, description: 'John Doe2', createdAt: new Date(), updatedAt: new Date()},
       { id: 3, description: 'John Doe3', createdAt: new Date(), updatedAt: new Date()},
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('tasks', null, {});
    
  }
};
