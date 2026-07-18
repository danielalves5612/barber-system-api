import bcrypt from "bcryptjs"

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('users', [{
       nome: 'Daniel Alves de Souza',
       email: 'danieladmin@gmail.com',
       telefone: '(11) 994578965',
       password_hash: bcrypt.hashSync('12345678', 8),
       role: 'admin',
       created_at: new Date(),
       updated_at: new Date(),
     }], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {
      email: 'danieladmin@gmail.com'
    });
    
  }
};
