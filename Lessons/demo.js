const fs = require('fs');
const https= require('https');

var options = {
    key: fs.readFileSync('./privateKey.key'),
    cert: fs.readFileSync('certificate.crt')
};

console.log(options.key);
 const server= https.createServer(options);
server.on('request', (req, res) => {
    //res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello from my HTTPS Web server!!!\n');
});
server.listen(4000, ()=> console.log("Is working------"));