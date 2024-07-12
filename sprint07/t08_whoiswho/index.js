const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    let pageLoads = req.cookies.pageLoads;
    if (pageLoads) {
        // If the cookie exists, increment its value
        pageLoads = Number(pageLoads) + 1;
    } else {
        // If the cookie doesn't exist, create it and set its value to 1
        pageLoads = 1;
    }

    // Set the cookie with an expiry time of 1 minute
    res.cookie('pageLoads', pageLoads, { maxAge: 60 * 1000 });

    // Display the page load count
    res.send(`This page has been loaded ${pageLoads} times in the last minute.`);
});

app.get('/hello', (req, res) => {
    res.send('Hello');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});