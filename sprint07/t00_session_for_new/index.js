const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;
const local = "localhost";

app.use(session({secret: 'hasdasdasdas', saveUninitialized: true, resave: true}));
app.use(express.urlencoded({extended: true}));

app.post('/login', (req, res) => {
    req.session.hero = req.body;

    let origins = ['unknown', 'accident', 'accident2', 'notHuman', 'otherOrigin'];
    let powers = ['telekinesis', 'superStrength', 'shapeshifting', 'flight', 'control', 'other'];
    let countOrigins = 0;
    let countPowers = 0;

    origins.forEach(origin => {
        if(req.body[origin]) {
            countOrigins++;
        }
    });

    powers.forEach(power => {
        if(req.body[power]) {
            countPowers++;
        }
    });

    req.session.hero.purpose = countOrigins;
    req.session.hero.expirience = countPowers;

    res.redirect("/check_info");
});

app.get('/', (req, res) => {
    if(req.session.hero){
        res.redirect('/check_info');
    } else {
        res.sendFile(__dirname + '/form.html');
    }
});

app.get('/forget',(req, res) => {
    req.session.destroy(() => { res.redirect('/'); });
});

app.get('/check_info', (req, res) => {
    if(req.session.hero) {
        let hero = req.session.hero;
        res.write(`<h1>Session for new</h1>
        <span>
        Real name: ${hero.realName}<br>
        Current Alias: ${hero.heroName}<br>
        Age: ${hero.age}<br>
        Description: ${hero.about}<br>
        Photo: ${hero.photo}<br>
        Expirience: ${hero.expirience}<br>
        Level: ${hero.levelControl}<br>
        Purpose: ${hero.purpose}<br><br></span>`);
        res.end('<button><a href=/forget>Forgot</a></button>');
    } else {
        res.redirect('/');
    }
});

app.listen( port, local, () => {
    console.log("Server started on http://localhost:" + port);
});