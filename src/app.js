import express, { urlencoded, json } from 'express';
import './database/index.js';
import router from "./routes/UserRoute.js"


const app = express()

app.use(urlencoded( { extended: true}))
app.use(json())
app.use(router)

export default app;