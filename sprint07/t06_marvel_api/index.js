const express = require('express');
const app = express();
const fs = require('fs');
const rq = require('request');
const path = require("path");

const host = "localhost";
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

function getIndex(insert, title) {
    try {
        const data = fs.readFileSync('index.html', 'utf-8');
        if(data && insert){
            return data.replace("#WebsiteURL#", insert).replace("Show other sites", title);
        }
        else {
            return data.replace("#WebsiteURL#", '').replace("Show other sites", title);
        }
    } catch (err) {

    }
    return false;
}

app.get('/', function(request, response){
    console.log(request.query);
    if(!request.query.url) {
        response.send(getIndex(`<div id="typeurl">Input your URL...</div>`, "Show other sites"));
    } else {
        const url = `https://gateway.marvel.com:443/v1/public/${request.query.url}?apikey=YOUR_API_KEY`;
        rq(url, function (error, res, body) {
            const data = JSON.parse(body);
            // Extract the data you need from the response and format it
            const formattedData = formatData(data);
            response.send(getIndex(formattedData, request.query.url));
        });
    }
});

function formatData(data) {
    // This function should format the data from the API response in a way that can be displayed on your webpage
    // For example, if you're using the /characters endpoint, you might want to display each character's name and description
    let formattedData = '';
    data.data.results.forEach(character => {
        formattedData += `<h2>${character.name}</h2><p>${character.description}</p>`;
    });
    return formattedData;
}

app.listen(port, host, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});