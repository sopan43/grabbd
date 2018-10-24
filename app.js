var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

const index = require('./route/index.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/user', index);

app.listen(port, () => {
    console.log('Connection Established At PORT:', port);
});