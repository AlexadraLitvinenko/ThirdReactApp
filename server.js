const { join } = require('path');
const express = require('express');

const { getData } = require('./utils');
const { data } = require('./data.js');

const { getUsers } = require('./utils');
const { users } = require('./data.js');


const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/list', (req, res) => {
    console.log(req.query);

    const { count } = req.query;

    const w = getData(data, count);

    res.send(w);
});

app.get('/users', (req, res) => {
    console.log(req.query);

    const { value } = req.query;

    const u = getUsers(users, value);

    console.log('ADFGHJYHGDFCF: ', u)

    res.send(u);
});
// TODO метод обработки запроса здесь

app.listen(3000, () => console.log('port 3000'));
