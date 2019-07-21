const http = require('http');
const mongoose = require('mongoose');
const Item = require('./src/item');

//create a server object:
http.createServer(async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const url = require('url').parse(req.url, true);
    switch (url.query.source) {
        case 'items':
            await mongoose.connect('mongodb://localhost/tests', {useNewUrlParser: true});
            const items = await Item.find({ type: 'helmet' });
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(items));
            break;
    }
    res.end();
}).listen(3001);