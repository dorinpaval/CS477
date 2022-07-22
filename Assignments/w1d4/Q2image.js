const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', function (req, res) {
    let img = fs.readFileSync('./dolphin.jpg');
    res.end(img);
});
server.listen(3000);

const server1 = http.createServer();
server1.on('request', (req, res) => {
    fs.createReadStream("./dolphin2.jpg").pipe(res);
});

server1.listen(4000);