import { Model, Sequelize } from "sequelize";

class User extends Model{
    static init(sequelize){
        super.init({
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            telefone: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            role: Sequelize.STRING
        },
        {
            sequelize
        }
        )
        return this
    }
}

export default User