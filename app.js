const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const index = require('./route/index.js');
const movie = require('./route/movie.js');

const port = process.env.PORT || 3000;
console.log("Sopan Mittal")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ secret: "MySecrateKey", resave: true, saveUninitialized: true }));

app.use('/user', index);
app.use('/search', movie);

app.listen(port, () => {
    console.log('Connection Established At PORT:', port);
});