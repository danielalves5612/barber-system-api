'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkUpdate('services', 
      {categoria: 'Cabelo'},
      {
        nome: {
          [Sequelize.Op.in]: [
            "Corte Social",
            "Corte Degradê",
            "Corte Navalhado",
            "Corte Tesoura",
            "Corte Infantil",
            "Corte Premium",
            "Pigmentação de Cabelo"
          ]
        }
      },
    );

    await queryInterface.bulkUpdate('services', 
      {categoria: 'Barba'},
      {
        nome: {
          [Sequelize.Op.in]: [
            "Barba Tradicional",
            "Barba Navalhada",
            "Pigmentação de Barba"
          ]
        }
      }
    )

    await queryInterface.bulkUpdate('services',
      {categoria: "Combo"},
      {
        nome: {
          [Sequelize.Op.in]: [
            "Corte + Barba",
            "Corte + Barboterapia",
          ]
        }
      }
    )

    await queryInterface.bulkUpdate('services', 
      {categoria: "Tratamento"},
      {
        nome: {
          [Sequelize.Op.in]: [
            "Barboterapia",
            "Platinado",
            "Luzes",
            "Hidratação Capilar",
            "Relaxamento Capilar",
            "Camuflagem de Fios Brancos"
          ]
        }
      }
    )

    await queryInterface.bulkUpdate('services',
      {categoria: "Acabamento"},
      {
        nome: {
          [Sequelize.Op.in]: [
            "Pezinho",
            "Sobrancelha"
          ]
        }
      }
    )
     
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkUpdate('services', 
      {categoria: null},
      {
        nome: {
          [Sequelize.Op.in]: [
            "Corte Social",
            "Corte Degradê",
            "Corte Navalhado",
            "Corte Tesoura",
            "Corte Infantil",
            "Corte Premium",
            "Pigmentação de Cabelo",
            "Barba Tradicional",
            "Barba Navalhada",
            "Pigmentação de Barba",
            "Corte + Barba",
            "Corte + Barboterapia",
            "Barboterapia",
            "Platinado",
            "Luzes",
            "Hidratação Capilar",
            "Relaxamento Capilar",
            "Camuflagem de Fios Brancos",
            "Pezinho",
            "Sobrancelha"
          ]
        }
      }
    );
     
  }
};
