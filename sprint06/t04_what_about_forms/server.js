const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const port = 5000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    if (pathname === '/result' && query.answer) {
        const correct = "bite";
        const boo = query.answer === correct;
        console.log(`Checking answer: ${query.answer}`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ correct: boo }));
    } else {
        const filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(`Error reading file: ${filePath}`);
                res.writeHead(500);
                res.end('Server error');
                return;
            }
            console.log(`Serving file: ${filePath}`);
            res.writeHead(200, { 'Content-Type': pathname === '/' ? 'text/html' : 'text/javascript' });
            res.end(data);
        });
    }
});

server.listen(port, host, () => {
    console.log(`Server has been started on http://localhost:${port}`);
});