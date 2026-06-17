import express from 'express';
import './database/index.js';

const app = express()

app.get('/', (req, res) => {
    res.send('Olá')
})

export default app;