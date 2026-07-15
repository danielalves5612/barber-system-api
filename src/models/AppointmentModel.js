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
            service_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "O serviço do agendamento é obrigatório"
                    }
                }
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

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: "cliente_id",
            as: "cliente"

        })

        this.belongsTo(models.User, {
            foreignKey: "barbeiro_id",
            as: "barbeiro"
        })

        this.belongsTo(models.Service, {
            foreignKey: "service_id",
            as: "service"
        })
    }

}

export default Appointment