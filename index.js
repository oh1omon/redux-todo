require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const app = express();
const path = require('path');
const DbService = require('./dbService');

app.use(cors());
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.get('/api', (req, res) => {
    const result = DbService.getAll();
    result.then((data) => res.json(data)).catch((err) => console.log(err));
});

app.post('/api', (req, res) => {
    const result = DbService.insertNew(req.body);
    result
        .then((resp) => {
            res.json(resp[0]);
        })
        .catch((err) => console.log(err));
});

app.listen(PORT, HOST, () => {
    console.log(`server is listening on ${HOST}:${PORT}`);
});
