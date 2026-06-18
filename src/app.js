import express, { urlencoded, json } from 'express';
import './database/index.js';
import UserRoute from "./routes/UserRoute.js"
import TokenRoute from "./routes/TokenRoute.js"


const app = express()

app.use(urlencoded( { extended: true}))
app.use(json())
app.use(UserRoute)
app.use(TokenRoute)


export default app;