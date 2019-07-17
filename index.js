const http = require('http');
const fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
    const url = require('url').parse(req.url, true);
    switch (url.query.source) {
        case 'items':
            const data = fs.readFileSync(`./items/${url.query.type}.json`, 'utf8');
            res.setHeader("Content-Type", "application/json");
            res.write(data);
            break;
    }
    res.end();
}).listen(3001);