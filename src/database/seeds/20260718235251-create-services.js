'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('services', [
      {
        nome: 'Corte Social',
        preco: 35.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Corte Degradê',
        preco: 40.00,
        duracao: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Corte Navalhado',
        preco: 45.00,
        duracao: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Corte Infantil',
        preco: 30.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Corte na Tesoura',
        preco: 45.00,
        duracao: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Corte Americano',
        preco: 40.00,
        duracao: 40,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Barba Tradicional',
        preco: 25.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Barba com Toalha Quente',
        preco: 35.00,
        duracao: 40,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Barba Italiana',
        preco: 30.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Barba Desenhada',
        preco: 30.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Corte + Barba',
        preco: 60.00,
        duracao: 60,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Corte + Barba Premium',
        preco: 75.00,
        duracao: 75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Pezinho',
        preco: 15.00,
        duracao: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Sobrancelha',
        preco: 15.00,
        duracao: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Pigmentação de Barba',
        preco: 30.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Pigmentação Capilar',
        preco: 40.00,
        duracao: 40,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Hidratação Capilar',
        preco: 35.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Platinado',
        preco: 120.00,
        duracao: 120,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Luzes',
        preco: 90.00,
        duracao: 90,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Relaxamento Capilar',
        preco: 70.00,
        duracao: 60,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('services', {
      nome: {
        [Sequelize.Op.in]: [
          'Corte Social',
          'Corte Degradê',
          'Corte Navalhado',
          'Corte Infantil',
          'Corte na Tesoura',
          'Corte Americano',
          'Barba Tradicional',
          'Barba com Toalha Quente',
          'Barba Italiana',
          'Barba Desenhada',
          'Corte + Barba',
          'Corte + Barba Premium',
          'Pezinho',
          'Sobrancelha',
          'Pigmentação de Barba',
          'Pigmentação Capilar',
          'Hidratação Capilar',
          'Platinado',
          'Luzes',
          'Relaxamento Capilar'
        ]
      }
    }, {});
  }
};