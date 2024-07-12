const normal = require('./normal-router');
const quantum = require('./quantum-router');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;
const host = 'localhost';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/normal', (req, res) => {
    res.render('normal', { time: normal.calculateTime() });
});

app.get('/quantum', (req, res) => {
    res.render('quantum', { time: quantum.calculateTime() });
});

app.listen(PORT, host, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});