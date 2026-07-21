'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('services', 'categoria', { 
      type: Sequelize.STRING
    });
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('services', 'categoria');
     
  }
};
