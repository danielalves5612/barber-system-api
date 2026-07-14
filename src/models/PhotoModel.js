import Sequelize, { Model } from "sequelize";

class Photo extends Model{
    static init(sequelize){
        super.init({
            originalname: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: 'O nome original da imagem é obrigatório'
                    }
                }
            },
            filename: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: 'O nome do arquivo da imagem é obrigatório'
                    }
                }
            },
            service_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'O serviço relacionado a imagem é obrigatório'
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

    static associate(models){
        this.belongsTo(models.Service, {
            foreignKey: 'service_id',
            as: 'service'
        })
    }
}

export default Photo