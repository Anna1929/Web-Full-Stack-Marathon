const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.redirect('/charset');
});

app.get("/charset", (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.post("/charset", (request, response) => {
    let inputString = request.body.inputString;
    let charset = request.body.charset;
    let outputString;

    switch(charset) {
        case 'utf8':
            outputString = Buffer.from(inputString).toString('utf8');
            break;
        case 'ascii':
            outputString = Buffer.from(inputString).toString('ascii');
            break;
        case 'base64':
            outputString = Buffer.from(inputString).toString('base64');
            break;
    }

    response.render('charset', { outputString: outputString });
});

app.get("/clear", (request, response) => {
    response.redirect('/charset');
});

app.listen(3000, () => {
    console.log("Server: http://localhost:3000");
});