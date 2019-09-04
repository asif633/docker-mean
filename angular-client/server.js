const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const compression = require('compression');
const app = express();

app.use(cors());
app.use(compression());
app.use(express.static(__dirname + '/dist/angular-client'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/angular-client/index.html'));
});

//Set Port
const port = process.env.PORT || '4200';
app.set('port', port);

const server = http.createServer(app);

server.listen(port,'0.0.0.0', () => console.log(`Running on localhost:${port}`));