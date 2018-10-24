var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

var question = require('./route/question.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/brain_toster', question);

app.listen(port, () => {
    console.log('Connection Established At PORT:', port);
});