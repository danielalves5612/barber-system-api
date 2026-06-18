import { Model, Sequelize } from "sequelize";
import bcryptjs from "bcryptjs"

class User extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: "Campo nome não pode estar vazio"
                    },
                    len: {
                        args: [5, 50],
                        msg: "O nome precisa ter entre 5 e 50 caracteres"
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                unique: {
                    msg: "Este e-mail já está cadastrado"
                },
                validate: {
                    isEmail: {
                        msg: "Por favor, digite um e-mail válido"
                    },
                    notEmpty: {
                        msg: "O campo e-mail precisa ser preenchido"
                    },
                }
            },
            telefone: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: "O campo telefone precisa ser preenchido"
                    }
                }
            },
            password: {
                type: Sequelize.VIRTUAL,
                validate: {
                    notEmpty: {
                        msg: "O campo password precisa ser preenchido"
                    },
                    len: {
                        args: [8, 20],
                        msg: "O password precisa ter entre 8 e 20 caracteres"
                    }
                }
            },
            password_hash: Sequelize.STRING,
            role: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: "Por favor, informe qual o cargo do usuário"
                    }
                }
            }
        },
        {
            sequelize,
            tableName: 'users'

        })

        this.addHook("beforeSave", (user) => {

            if(!user.password) return

            const hash = bcryptjs.hashSync(user.password, 10)
            user.password_hash = hash
        })

        return this
    }

    passwordIsValid(password){
        
        return bcryptjs.compareSync(password, this.password_hash)
    }
}

export default User