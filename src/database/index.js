import { Sequelize } from "sequelize";
import configDatabase from "../config/database.js";

const connection = new Sequelize(configDatabase)

async function teste(){
    try{
        await connection.authenticate()
        console.log('Banco connectado com Sucesso')
    }catch(e){
        console.error(e)
    }
}

teste()

export default connection