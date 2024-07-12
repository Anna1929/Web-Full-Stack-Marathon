const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const PORT = 3000;
const localhost = 'localhost';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/answers' && req.method.toLowerCase() === 'post') {
        let body = '';
        req.on('data', ell => {
            body += ell.toString();
        });
        req.on('end', () => {
            const formData = querystring.parse(body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Application received!', formData: formData }));
        });
    } else {
        const filePath = path.join(__dirname, parsedUrl.pathname === '/' ? 'index.html' : parsedUrl.pathname);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(`Error reading file: ${filePath}`);
                res.writeHead(500);
                res.end('Server error');
                return;
            }
            console.log(`Serving file: ${filePath}`);
            res.writeHead(200, {
                'Content-Type': filePath.endsWith('.html') ? 'text/html'
                    : filePath.endsWith('.css') ? 'text/css'
                        : 'text/javascript'
            });
            res.end(data);
        });
    }
});

server.listen(PORT, localhost, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});