'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('services', [
      {
        nome: "Corte Social",
        descricao: "Corte clássico e tradicional, ideal para um visual elegante e bem alinhado.",
        preco: 35.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Corte Degradê",
        descricao: "Corte com transição gradual nas laterais e acabamento personalizado.",
        preco: 40.00,
        duracao: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Corte Navalhado",
        descricao: "Corte com acabamento detalhado utilizando navalha para maior definição.",
        preco: 45.00,
        duracao: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Corte Tesoura",
        descricao: "Corte realizado principalmente com tesoura para um acabamento natural.",
        preco: 45.00,
        duracao: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Corte Infantil",
        descricao: "Corte de cabelo pensado especialmente para crianças.",
        preco: 30.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Barba Tradicional",
        descricao: "Aparação e alinhamento completo da barba com acabamento preciso.",
        preco: 30.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Barba Navalhada",
        descricao: "Modelagem completa da barba com acabamento feito com navalha.",
        preco: 35.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Barboterapia",
        descricao: "Tratamento completo da barba com toalha quente, produtos especiais e acabamento.",
        preco: 45.00,
        duracao: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Corte + Barba",
        descricao: "Combo completo com corte de cabelo e modelagem da barba.",
        preco: 65.00,
        duracao: 60,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Corte + Barboterapia",
        descricao: "Corte de cabelo combinado com tratamento completo de barboterapia.",
        preco: 75.00,
        duracao: 75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Pezinho",
        descricao: "Acabamento e alinhamento do contorno do cabelo.",
        preco: 15.00,
        duracao: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Sobrancelha",
        descricao: "Alinhamento e acabamento das sobrancelhas para um visual mais definido.",
        preco: 15.00,
        duracao: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Pigmentação de Barba",
        descricao: "Aplicação de pigmentação para realçar e uniformizar a aparência da barba.",
        preco: 35.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Pigmentação de Cabelo",
        descricao: "Aplicação de pigmentação para realçar e uniformizar a aparência do cabelo.",
        preco: 40.00,
        duracao: 45,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Platinado",
        descricao: "Descoloração completa dos fios para alcançar um visual platinado.",
        preco: 120.00,
        duracao: 120,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Luzes",
        descricao: "Aplicação de mechas para criar contraste e iluminação nos cabelos.",
        preco: 90.00,
        duracao: 90,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Hidratação Capilar",
        descricao: "Tratamento para hidratar os fios e melhorar a aparência e maciez do cabelo.",
        preco: 35.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Relaxamento Capilar",
        descricao: "Tratamento para reduzir o volume e proporcionar maior maleabilidade aos fios.",
        preco: 70.00,
        duracao: 60,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Camuflagem de Fios Brancos",
        descricao: "Tratamento para suavizar a aparência dos fios brancos de forma natural.",
        preco: 50.00,
        duracao: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Corte Premium",
        descricao: "Experiência completa de corte com consultoria de estilo e acabamento detalhado.",
        preco: 60.00,
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