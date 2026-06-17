/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        telefone: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password_hash: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        role: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          allowNull: false,
        },

      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};
