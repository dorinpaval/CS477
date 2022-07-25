// const http=require('http');
// const server= http.createServer();

// server.listen(3000, ()=> console.log("Listening"));


const fs = require('fs');
const http = require('http')
const server= http.createServer();

server.on('request', (req, res) => {
    // console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write(`<html>
                    <head><title>Enter Message</title></head>
                    <body><form action="/messsage" method="POST">Enter Message: <input name="message"><button type="submit">Send</button></form></body>
                    </html>`);
        return res.end(); // "retrun" here exits the function execution, otherwise continue.
    }

    if (url === '/messsage' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1].split('+').join(' '));
            fs.writeFileSync('message.txt', parsedBody.split('=')[1].split('+').join(' '));
        });
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hellow from Node.js</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000, ()=> console.log("Listening to 3000..."));