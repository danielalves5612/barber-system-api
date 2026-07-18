import bcrypt from 'bcryptjs';

'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {

    const passwordHash = bcrypt.hashSync("12345678", 8)

    await queryInterface.bulkInsert('users', [
    {
      nome: "Rafael Vidal dos Santos",
      email: "rafael.vidal@example.com",
      telefone: "11987789654",
      password_hash: passwordHash,
      role: "cliente",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Lucas Ferreira Lima",
      email: "lucas.ferreira@example.com",
      telefone: "11976543210",
      password_hash: passwordHash,
      role: "cliente",
      created_at: new Date(),
      updated_at: new Date()  
    },
    {
      nome: "Matheus Oliveira Costa",
      email: "matheus.oliveira@example.com",
      telefone: "11965432109",
      password_hash: passwordHash,
      role: "cliente",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Bruno Henrique Alves",
      email: "bruno.alves@example.com",
      telefone: "11954321098",
      password_hash: passwordHash,
      role: "cliente",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Felipe Rodrigues Silva",
      email: "felipe.rodrigues@example.com",
      telefone: "11943210987",
      password_hash: passwordHash,
      role: "cliente",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Thiago Martins Souza",
      email: "thiago.martins@example.com",
      telefone: "11932109876",
      password_hash: passwordHash,
      role: "cliente",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Pedro Henrique Gomes",
      email: "pedro.gomes@example.com",
      telefone: "11921098765",
      password_hash: passwordHash,
      role: "cliente",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Gustavo Almeida Rocha",
      email: "gustavo.almeida@example.com",
      telefone: "11910987654",
      password_hash: passwordHash,
      role: "cliente",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Leonardo Ribeiro Melo",
      email: "leonardo.ribeiro@example.com",
      telefone: "11999887766",
      password_hash: passwordHash,
      role: "cliente",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "André Luiz Carvalho",
      email: "andre.carvalho@example.com",
      telefone: "11988776655",
      password_hash: passwordHash,
      role: "cliente",  
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Gabriel dos Santos Silva",
      email: "gabriel.santos@example.com",
      telefone: "11993214876",
      password_hash: passwordHash,
      role: "barbeiro",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Marcos Vinicius Pereira",
      email: "marcos.pereira@example.com",
      telefone: "11982103765",
      password_hash: passwordHash,
      role: "barbeiro",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "João Victor Nascimento",
      email: "joao.nascimento@example.com",
      telefone: "11971092654",
      password_hash: passwordHash,
      role: "barbeiro",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Diego Fernandes Moraes",
      email: "diego.fernandes@example.com",
      telefone: "11960981543",
      password_hash: passwordHash,
      role: "barbeiro",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Caio Augusto Barbosa",
      email: "caio.barbosa@example.com",
      telefone: "11959870432",
      password_hash: passwordHash,
      role: "barbeiro",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Vinicius Lopes Cardoso",
      email: "vinicius.lopes@example.com",
      telefone: "11948769321",
      password_hash: passwordHash,
      role: "barbeiro",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Eduardo Mendes Freitas",
      email: "eduardo.mendes@example.com",
      telefone: "11937658210",
      password_hash: passwordHash,
      role: "barbeiro",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Henrique Moreira Castro",
      email: "henrique.moreira@example.com",
      telefone: "11926547109",
      password_hash: passwordHash,
      role: "barbeiro",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Rodrigo Teixeira Ramos",
      email: "rodrigo.teixeira@example.com",
      telefone: "11915436098",
      password_hash: passwordHash,
      role: "barbeiro",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: "Murilo Azevedo Correia",
      email: "murilo.azevedo@example.com",
      telefone: "11904325987",
      password_hash: passwordHash,
      role: "barbeiro",
      created_at: new Date(),
      updated_at: new Date()
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', 
    {
      email: {
        [Sequelize.Op.in]: [
          "murilo.azevedo@example.com",
          "rodrigo.teixeira@example.com",
          "henrique.moreira@example.com",
          "eduardo.mendes@example.com",
          "vinicius.lopes@example.com",
          "caio.barbosa@example.com",
          "diego.fernandes@example.com",
          "bruno.alves@example.com",  
          "matheus.oliveira@example.com", 
          "lucas.ferreira@example.com", 
          "rafael.vidal@example.com", 
          "joao.nascimento@example.com",  
          "marcos.pereira@example.com", 
          "gabriel.santos@example.com", 
          "andre.carvalho@example.com", 
          "leonardo.ribeiro@example.com", 
          "gustavo.almeida@example.com", 
          "pedro.gomes@example.com", 
          "thiago.martins@example.com", 
          "felipe.rodrigues@example.com",
        ]
      }
    }, 
    {});

  }
};
