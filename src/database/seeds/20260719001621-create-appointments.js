'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('appointments', [
      {
        data: '2026-07-20',
        hora: '09:00:00',
        status: 'concluido',
        cliente_id: 12,
        barbeiro_id: 22,
        service_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-20',
        hora: '10:00:00',
        status: 'concluido',
        cliente_id: 13,
        barbeiro_id: 23,
        service_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-21',
        hora: '11:00:00',
        status: 'cancelado',
        cliente_id: 14,
        barbeiro_id: 24,
        service_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-22',
        hora: '09:30:00',
        status: 'confirmado',
        cliente_id: 15,
        barbeiro_id: 25,
        service_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-22',
        hora: '14:00:00',
        status: 'agendado',
        cliente_id: 16,
        barbeiro_id: 26,
        service_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-23',
        hora: '08:30:00',
        status: 'confirmado',
        cliente_id: 17,
        barbeiro_id: 27,
        service_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-23',
        hora: '13:30:00',
        status: 'agendado',
        cliente_id: 18,
        barbeiro_id: 28,
        service_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-24',
        hora: '10:00:00',
        status: 'cancelado',
        cliente_id: 19,
        barbeiro_id: 29,
        service_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-24',
        hora: '15:00:00',
        status: 'confirmado',
        cliente_id: 20,
        barbeiro_id: 30,
        service_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-25',
        hora: '09:00:00',
        status: 'agendado',
        cliente_id: 21,
        barbeiro_id: 31,
        service_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        data: '2026-07-25',
        hora: '11:00:00',
        status: 'confirmado',
        cliente_id: 12,
        barbeiro_id: 23,
        service_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-25',
        hora: '16:00:00',
        status: 'agendado',
        cliente_id: 13,
        barbeiro_id: 24,
        service_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-26',
        hora: '08:00:00',
        status: 'confirmado',
        cliente_id: 14,
        barbeiro_id: 25,
        service_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-26',
        hora: '12:00:00',
        status: 'agendado',
        cliente_id: 15,
        barbeiro_id: 26,
        service_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-27',
        hora: '09:30:00',
        status: 'cancelado',
        cliente_id: 16,
        barbeiro_id: 27,
        service_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-27',
        hora: '14:30:00',
        status: 'confirmado',
        cliente_id: 17,
        barbeiro_id: 28,
        service_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-28',
        hora: '10:00:00',
        status: 'agendado',
        cliente_id: 18,
        barbeiro_id: 29,
        service_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-28',
        hora: '15:30:00',
        status: 'confirmado',
        cliente_id: 19,
        barbeiro_id: 30,
        service_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-29',
        hora: '08:30:00',
        status: 'agendado',
        cliente_id: 20,
        barbeiro_id: 31,
        service_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-29',
        hora: '13:00:00',
        status: 'confirmado',
        cliente_id: 21,
        barbeiro_id: 22,
        service_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        data: '2026-07-30',
        hora: '09:00:00',
        status: 'agendado',
        cliente_id: 12,
        barbeiro_id: 24,
        service_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-30',
        hora: '11:30:00',
        status: 'confirmado',
        cliente_id: 13,
        barbeiro_id: 25,
        service_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-30',
        hora: '16:30:00',
        status: 'cancelado',
        cliente_id: 14,
        barbeiro_id: 26,
        service_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-31',
        hora: '08:00:00',
        status: 'confirmado',
        cliente_id: 15,
        barbeiro_id: 27,
        service_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-07-31',
        hora: '10:30:00',
        status: 'agendado',
        cliente_id: 16,
        barbeiro_id: 28,
        service_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-08-01',
        hora: '09:00:00',
        status: 'confirmado',
        cliente_id: 17,
        barbeiro_id: 29,
        service_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-08-01',
        hora: '14:00:00',
        status: 'agendado',
        cliente_id: 18,
        barbeiro_id: 30,
        service_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-08-02',
        hora: '10:00:00',
        status: 'confirmado',
        cliente_id: 19,
        barbeiro_id: 31,
        service_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-08-02',
        hora: '13:30:00',
        status: 'agendado',
        cliente_id: 20,
        barbeiro_id: 22,
        service_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        data: '2026-08-03',
        hora: '15:00:00',
        status: 'agendado',
        cliente_id: 21,
        barbeiro_id: 23,
        service_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('appointments', {
      cliente_id: {
        [Sequelize.Op.between]: [12, 21]
      },
      barbeiro_id: {
        [Sequelize.Op.between]: [22, 31]
      }
    }, {});
  }
};