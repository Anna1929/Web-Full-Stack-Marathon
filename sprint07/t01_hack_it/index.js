const express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session");
const app = express();
const path = require('path');

const port = 3000;
const host = "localhost";

app.use(session({ secret: "asda", saveUninitialized: true, resave: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (request, response) => {
    let sess = request.session;
    if(!sess.password){
        response.sendFile(path.join(__dirname, 'password.html'));
    }
    if (sess.password) {
        response.redirect(`/check?hash=${sess.hash}`);
    }
});

app.get('/result', (request, response) => {
    let sess = request.session;
    if(sess.password){
        response.sendFile(path.join(__dirname, 'check.html'));
    }
});

app.get('/loginAgain', (request, response) => {
    request.session.destroy(() => {});
    response.redirect('/');
});

app.get("/check", (request, response) => {
    let hash = request.query.hash;
    response.sendFile(path.join(__dirname, 'check.html'));
});

app.post('/', (request,response) => {
    let sess = request.session;
    sess.password = request.body.password;
    sess.number = request.body.number;
    let salt = bcrypt.genSaltSync(+sess.number);
    sess.hash = bcrypt.hashSync(sess.password, salt);
    response.redirect('/result');
});

app.post('/hack', (request,response) => {
    let sess = request.session;
    sess.text = request.body.text;
    if(!sess.password) {
        response.redirect('/');
    } else {
        if(bcrypt.compareSync(sess.text, sess.hash)){
            sess.hacked = true;
            request.session.destroy(() => {
                response.sendFile(path.join(__dirname, 'hack.html'));
            });
        } else {
            response.sendFile(path.join(__dirname, 'check.html'));
        }
    }
});

app.listen(port, host, () => {
    console.log(`Server listens http://localhost:${port}`);
});