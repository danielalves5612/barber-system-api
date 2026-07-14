import Sequelize, { Model } from "sequelize";

class Appointment extends Model{
    static init(sequelize){
        super.init({
            data: {
                type: Sequelize.DATEONLY,
                validate: {
                    notEmpty: {
                        msg: "A data do agendamento é obrigatória"
                    },
                },
            },
            hora: {
                type: Sequelize.TIME,
                validate: {
                    notEmpty: {
                        msg: "O horário do agendamento é obrigatório"
                    }
                }
            },
            status: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: "O status do agendamento é obrigatório"
                    }
                },
                defaultValue: 'agendado'
            },
            cliente_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "O cliente do agendamento é obrigatório"
                    }
                }
            },
            barbeiro_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "O barbeiro do agendamento é obrigatório"
                    }
                }
            }
        },
        {
            sequelize,
            tableName: "appointments"
        }
        )

        return this
    }

}

export default Appointment