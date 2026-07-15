'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn(
      "appointments",
      "service_id",
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "services",
          key: "id"
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn(
      "appointments",
      "service_id"
    );
  }
};
