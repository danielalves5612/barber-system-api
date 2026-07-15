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

const models = {
    User,
    Service,
    Appointment,
    Photo
}

Appointment.associate(models)
Service.associate(models)
Photo.associate(models)

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