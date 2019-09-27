const { join } = require('path');
const express = require('express');

const { getUsers } = require('./utils');
const { users } = require('./data.js');


const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});
//Выполнение запроса по фамилии для работы функции сортировки
app.get('/users', (req, res) => {
    console.log(req.query);

    const { value } = req.query;

    const u = getUsers(users, value);

    res.send(u);
});

app.listen(3000, () => console.log('port 3000'));
