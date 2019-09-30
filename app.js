const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

if (process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost/mypers', {useNewUrlParser: true});
}

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
});
app.use(bodyParser.json());
routes(app);
app.use((err, req, res, next) => {
    res.status(422).send({
        error: err.message
    });
});

module.exports = app;