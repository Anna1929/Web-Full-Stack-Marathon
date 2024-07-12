const express = require('express');
const app = express();
const File = require('./File.js');
const FileList = require('./FileList.js');

const port = 3000;
const host = 'localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/js', express.static(__dirname + '/'));

app.post('/', (req, res) => {
    let file = new File(req.body.filename);
    file.write(req.body.content)
    console.log(req.body);
    res.redirect('/');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/delete', (req, res) => {
    console.log(req.query.file);
    let file = new File(req.query.file);
    file.delete();
    res.redirect('/');
});

app.get('/list', (req, res) => {
    let fileList = new FileList();
    res.json({html: fileList.getHTMLList()});
});

app.get('/show', (req, res) => {
    console.log(req.query.file);
    let file = new File(req.query.file);
    res.json({content: file.read()});
});

app.get('/select-file', (req, res) => {
    const file = new File(req.query.file);
    const content = file.read();
    res.send(`
        <h1>${req.query.file}</h1>
        <p>${content}</p>
        <form action="/delete" method="POST">
            <input type="hidden" name="filename" value="${req.query.file}">
            <button type="submit">Delete File</button>
        </form>
    `);
});

app.listen(port, host, () => {
    console.log(`Server listens http://localhost:${port}`);
});