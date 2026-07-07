import express, { urlencoded, json } from 'express';
import './database/index.js';
import UserRoute from "./routes/UserRoute.js"
import TokenRoute from "./routes/TokenRoute.js"
import ServiceRoute from "./routes/ServiceRoute.js"
import AppointmentRoute from "./routes/AppointmentRoute.js"
import PhotoRoute from "./routes/PhotoRoute.js"
import path, { resolve } from 'path'
import { fileURLToPath } from 'url'
import ErrorHandler from './middlewares/ErrorHandler.js';


const app = express()

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

app.use(urlencoded( { extended: true}))
app.use('/uploads/images', express.static(resolve(__dirname, 'uploads', 'images')))
app.use(json())
app.use(UserRoute)
app.use(TokenRoute)
app.use(ServiceRoute)
app.use(AppointmentRoute)
app.use(PhotoRoute)
app.use(ErrorHandler)


export default app;