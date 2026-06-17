import { Sequelize } from "sequelize";
import configDatabase from "../config/database.js";
import User from "../models/UserModel.js";

const sequelize = new Sequelize(configDatabase)

User.init(sequelize)

async function teste(){
    try{
        await sequelize.authenticate()
        console.log('Banco connectado com Sucesso')
    }catch(e){
        console.error(e)
    }
}

teste()

export default sequelize