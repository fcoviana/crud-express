const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/view/index.html');
});

app.listen(8080, () => {
    console.log('Executando');
});