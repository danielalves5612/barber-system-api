import Sequelize, { Model } from "sequelize";

class Service extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: "O campo nome precisa ser preenchido"
                    },
                    len: {
                        args: [5, 50],
                        msg: "O campo nome precisa ter entre 5 e 50 caracteres"
                    },
                },
                unique: {
                    msg: "Serviço já cadastrado"
                }
            },
            descricao: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: "O campo descrição precisa ser preenchido"
                    }
                }
            },
            preco: {
                type: Sequelize.DECIMAL,
                validate: {
                    isDecimal: {
                        msg: "O preço precisa ser um número decimal"
                    },
                    notEmpty: {
                        msg: "O campo preço precisa ser preenchido"
                    }
                }
            },
            duracao: {
                type: Sequelize.INTEGER,
                validate: {
                    notEmpty: {
                        msg: "O campo duração precisa ser preenchido"
                    },
                    min: {
                        args: 15,
                        msg: "O tempo de duração precisa ser maior que 15 minutos"
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

}

export default Service