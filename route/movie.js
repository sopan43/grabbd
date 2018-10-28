const express = require('express');
const router = express.Router();
const validator = require("email-validator");
const request = require("request");
const querystring = require("querystring");

const middleware = require('../middleware/logincheck');
const conn = require('../connection.js')

router.get('/:id', middleware.isLoggedIn, (req, res) => {
    var id = req.params.id;
    var option = req.query.option;
    console.log(req.query.option);
    if (!isNaN(id) && !option) {
        var options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/' + id,
            qs: {
                language: 'en-US',
                api_key: process.env.TMDB_API_KEY
            },
            body: '{}'
        };

        request(options, function(error, response, body) {
            if (error) throw new Error(error);

            return res.json({ success: 1, message: 'successfully', data: JSON.parse(body) });
        });
    } else if (!isNaN(id) && (option === 'like' || option === 'dislike')) {
        var choice = {
            user_id: req.session.user_id,
            movie_id: req.params.id,
            user_choice: req.query.option
        };
        conn.query('SELECT * FROM choice WHERE user_id = ? AND movie_id = ?', [choice.user_id, choice.movie_id], (error, rows) => {
            if (error) {
                return res.json({ success: 0, message: 'Error in query ' + error });
            } else if (rows.length === 0) {
                conn.query('INSERT INTO choice SET ?', [choice], (error, result) => {
                    if (error) {
                        console.log('error in query ' + error);
                        return res.json({ success: 0, message: "Error in query " + error });
                    }
                });
            } else if (rows.length > 0 && rows[0].user_choice !== choice.user_choice) {
                conn.query('UPDATE choice SET user_choice = ? WHERE  user_id = ? AND movie_id = ?', [choice.user_choice, choice.user_id, choice.movie_id], (error, result) => {
                    if (error) {
                        console.log('error in query ' + error);
                        return res.json({ success: 0, message: "Error in query " + error });
                    }
                });
            } else if (rows.length > 0 && rows[0].user_choice === choice.user_choice) {
                conn.query('DELETE FROM choice  WHERE  user_id = ? AND movie_id = ?', [choice.user_id, choice.movie_id], (error, result) => {
                    if (error) {
                        console.log('error in query ' + error);
                        return res.json({ success: 0, message: "Error in query " + error });
                    }
                });
            }

        });
        return res.json({ success: 1, message: 'successfully' });
    }

});

router.get('/', middleware.isLoggedIn,(req, res) => {
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
                api_key: process.env.TMDB_API_KEY
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

module.exports = router;