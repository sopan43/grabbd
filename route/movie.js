const express = require('express');
const router = express.Router();
const validator = require("email-validator");
const request = require("request");
const querystring = require("querystring");

var conn = require('../connection.js')

router.get('/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    if (!isNaN(id)) {
        var options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/' + id,
            qs: {
                language: 'en-US',
                api_key: 'TMDB_API_KEY'
            },
            body: '{}'
        };

        request(options, function(error, response, body) {
            if (error) throw new Error(error);

            return res.json({ success: 1, message: 'successfully', data: JSON.parse(body) });
        });
    } else {

    }

});

router.get('/', (req, res) => {
    var query = req.query.query;
    if (isNaN(query)) {
        var options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/multi',
            qs: {
                include_adult: 'false',
                page: '1',
                query: query,
                language: 'en-US',
                //api_key: 'TMDB_API_KEY'
                api_key: '9f8e7e23d883edcb80bf34c7c3f2bbde'
            },
            body: '{}'
        };

        request(options, function(error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            return res.json({ success: 1, message: 'successfully', data: JSON.parse(body) });
        });
    } else{
    	
    }
});

module.exports = router;