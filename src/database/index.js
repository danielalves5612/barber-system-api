import { Sequelize } from "sequelize";
import configDatabase from "../config/database.js";
import User from "../models/UserModel.js";
import Service from "../models/ServiceModel.js";
import Appointment from "../models/AppointmentModel.js";
import Photo from "../models/PhotoModel.js";

const sequelize = new Sequelize(configDatabase)

User.init(sequelize)
Service.init(sequelize)
Appointment.init(sequelize)
Photo.init(sequelize)

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