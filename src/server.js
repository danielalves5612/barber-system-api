import app from './app.js';

const port = process.env.APP_PORT || process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log('Acesse http://localhost:3001')
})
