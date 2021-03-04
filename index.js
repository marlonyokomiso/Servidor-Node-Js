const { response } = require('express');
const express = require('express');

const app = express();
const { join } = require('path')

app.get('/', (_req, res) => {
    res.sendFile(join(__dirname, './index.html'));
});

app.get('/css', (_req, res) => {
    res.sendFile(join(__dirname, 'exemplo.html'))
});

app.listen(3000);
