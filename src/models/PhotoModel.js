import Sequelize, { Model } from "sequelize";

class Photo extends Model{
    static init(sequelize){
        super.init({
            originalname: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: 'O campo precisa estar preenchido'
                    }
                }
            },
            filename: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: 'O campo precisa estar preenchido'
                    }
                }
            },
            service_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'O serviço precisa ser informado'
                    }
                }
            },
            url: {
                type: Sequelize.VIRTUAL,
                get(){
                    return `http://localhost:3001/uploads/images/${this.filename}`
                }
            },
        },
        {
            sequelize,
            tableName: 'photos'
        })

        return this
    }
}

export default Photo