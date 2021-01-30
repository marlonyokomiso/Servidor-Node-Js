const { response } = require('express');
const express = require('express');

const app = express();
const { join } = require('path')

app.get('/', (_req, res) => {
    res.sendFile(join(__dirname, './index.html'));
});

app.get('/exemplo', (_req, res) => {
    res.sendFile(join(__dirname, 'exemplo.html'))
});

app.listen(4000); // Coloque a porta que quiser, mas a porta tem que conter 4 digitos em numeros!
