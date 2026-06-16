import app from './app.js';

const port = 3001

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
    console.log('Acesse http://localhost:3001')
})
