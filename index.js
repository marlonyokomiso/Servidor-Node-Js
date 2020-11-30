const { response } = require('express');
const express = require('express');

const app = express();
const { join } = require('path') //nativo

//rota
app.get('/', (request, response) => {
    console.log('Servidor foi chamado!');

    // return response.sendFile('./index.html');
    return response.sendFile(join(__dirname, './index.html'));
});

app.get('/teste', (_req, res) => {
    res.sendFile(join(__dirname, 'teste.html'))
});

app.listen(3333);