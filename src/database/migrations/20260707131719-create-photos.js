/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('photos', 
      { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          unique: true
        },
        originalname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        filename: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        service_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'services',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
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

    await queryInterface.dropTable('photos');
    
  }
};
