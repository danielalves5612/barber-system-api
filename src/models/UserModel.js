import { Model, Sequelize } from "sequelize";
import bcryptjs from "bcryptjs"

class User extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: "O nome é obrigatório."
                    },
                    len: {
                        args: [5, 50],
                        msg: "O nome deve conter entre 5 e 50 caracteres."
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                unique: {
                    msg: "Este e-mail já está cadastrado."
                },
                validate: {
                    isEmail: {
                        msg: "Informe um e-mail válido."
                    },
                    notEmpty: {
                        msg: "O e-mail é obrigatório."
                    },
                }
            },
            telefone: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: "O telefone é obrigatório."
                    }
                }
            },
            password: {
                type: Sequelize.VIRTUAL,
                validate: {
                    notEmpty: {
                        msg: "A senha é obrigatória."
                    },
                    len: {
                        args: [8, 20],
                        msg: "A senha deve conter entre 8 e 20 caracteres."
                    }
                }
            },
            password_hash: Sequelize.STRING,
            role: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: {
                        msg: "O cargo do usuário é obrigatório."
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