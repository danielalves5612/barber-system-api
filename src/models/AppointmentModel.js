import Sequelize, { Model } from "sequelize";

class Appointment extends Model{
    static init(sequelize){
        super.init({
            data: {
                type: Sequelize.DATEONLY,
                validate: {
                    notEmpty: {
                        msg: "O campo data precisa ser preenchido"
                    },
                },
            },
            hora: {
                type: Sequelize.TIME,
                validate: {
                    notEmpty: {
                        msg: "O campo hora precisa ser preenchido"
                    }
                }
            },
            status: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: "O campo status precisa ser preenchido"
                    }
                },
                defaultValue: 'agendado'
            },
            cliente_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            barbeiro_id: {
                type: Sequelize.INTEGER,
                allowNull: false
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