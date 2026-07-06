'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('appointments', 
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          unique: true
        },
        data: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        hora: {
          type: Sequelize.TIME,
          allowNull: false
        },
        status: {
          type: Sequelize.STRING,
          defaultValue: 'agendado',
          allowNull: false
        },
        cliente_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        barbeiro_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }

      },
    );
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('appointments');
  }
};
