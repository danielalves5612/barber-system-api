/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('services', 
      {
        id: {
          type: Sequelize.INTEGER,
          unique: true,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false
        },
        preco: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
        duracao: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        ativo: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        } 
      });
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('services');
     
  }
};
