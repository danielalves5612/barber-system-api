import Sequelize, { Model } from "sequelize";

class Service extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                unique: {
                    msg: "Já existe um serviço cadastrado com este nome"
                },
                validate: {
                    notEmpty: {
                        msg: "O nome do serviço é obrigatório"
                    },
                    len: {
                        args: [5, 50],
                        msg: "O nome do serviço deve conter entre 5 e 50 caracteres"
                    },
                },
            },
            descricao: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: "A descrição do serviço é obrigatória"
                    }
                }
            },
            categoria: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "A categoria é um campo obrigatório"
                    }
                }
            },
            preco: {
                type: Sequelize.DECIMAL,
                validate: {
                    isDecimal: {
                        msg: "O preço deve ser um número decimal válido"
                    },
                    notEmpty: {
                        msg: "O preço é obrigatório"
                    }
                }
            },
            duracao: {
                type: Sequelize.INTEGER,
                validate: {
                    notEmpty: {
                        msg: "A duração é obrigatória"
                    },
                    min: {
                        args: 15,
                        msg: "A duração deve ser de, no mínimo, 15 minutos"
                    }
                }
            },
            ativo: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            }
        },
        {
            sequelize,
            tableName: "services"
        }
        )

        return this
    }

    static associate(models){
        this.hasMany(models.Photo, {
            foreignKey: 'service_id',
            as: 'photos',
            onDelete: 'CASCADE',
            hooks: true
        })
    }

}

export default Service