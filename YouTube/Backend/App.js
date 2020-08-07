const express = require('express');
const app = express();
const port = 8000;
const Youtube = require('./api/helpers/Youtube.js');
const youtube = new Youtube();
require('dotenv').config()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/search/:id', (req, res) => {
    const q = req.params.id;
    youtube.get(q).then((response) => {
        res.send(response.data).status(200);
    }).catch((err) => {
        console.log(err);
    })
})

app.listen(port, console.log(`Listening at port ${port}`));