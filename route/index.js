const express = require('express');
const router = express.Router();
const validator = require("email-validator");
const md5 = require('md5');
const session = require('express-session');
const bodyParser = require("body-parser");

const middleware = require('../middleware/logincheck');
const conn = require('../connection.js')
/**********************************************************************************************************
 *                                                                                                        *
 *                                       POST Register User                                               *
 *                                                                                                        *
 **********************************************************************************************************/
router.post('/register', function(req, res) {

    var email = (req.body.email === undefined) ? "" : req.body.email.trim();
    var firstname = (req.body.firstname === undefined) ? "" : req.body.firstname.trim();
    var lastname = (req.body.lastname === undefined) ? "" : req.body.lastname.trim();
    var gender = (req.body.gender === undefined) ? "" : req.body.gender.trim();
    var dob = (req.body.dob === undefined) ? "" : req.body.dob.trim();
    var password = (req.body.password === undefined) ? "" : req.body.password.trim();

    var hashedPassword;
    if (password) {
        hashedPassword = md5(password);
    }
    var user_account = {
        user_email: email,
        user_firstname: firstname,
        user_lastname: lastname,
        user_gender: gender,
        user_dob: dob,
        user_password: hashedPassword
    };

    if (!email || !password || !validator.validate(email.trim())) {
        res.json({ success: 0, message: "Invalid/missing Email or password" });
    } else {
        conn.query('SELECT user_email FROM user WHERE user_email = ?', [email.trim()], (error, rows) => {
            if (error) {
                res.status(400);
                return res.json(error);
            }
            if (rows.length > 0) {
                return res.json("User Allready Exixt");
            } else {
                conn.query('INSERT INTO user SET ?', [user_account], (error, result) => {
                    if (error) {
                        res.status(400);
                        return res.json(error);
                    }
                    return res.json("User Registered  ");
                });
            }
        });
    }
}); //account/register

/**********************************************************************************************************
 *                                                                                                        *
 *                                       POST LOGIN  User                                                 *
 *                                                                                                        *
 **********************************************************************************************************/
router.post('/login', function(req, res) {

    var email = (req.body.email === undefined) ? "" : req.body.email.trim();
    var password = (req.body.password === undefined) ? "" : req.body.password.trim();


    if (req.session.user_login === undefined) {

        return new Promise(function(resolve, rej) {

            if (!email || !password) {
                res.status(400);
                rej('Unexpeted Error');
            } else {

                conn.query('SELECT * FROM user WHERE user_email = ?', [email], (error, row) => {
                    if (error) {
                        res.status(400);
                        rej(error);
                    } else {
                        if (row.length !== 1) {
                            res.status(400);
                            rej('No user found');
                        } else if (md5(password) == row[0].user_password) {
                            resolve(row[0]);
                        } else if (md5(password) != row[0].user_password) {
                            res.status(401);
                            rej('Wrong password');
                        } else {
                            res.status(400);
                            rej('Unexpeted Error');
                        }
                    }
                });
            }
        }).then(function(data) {
            req.session.user_login = true;
            req.session.user_id = data.user_id;
            req.session.user_email = data.user_email;
            req.session.user_name = data.user_name;
            return res.status(200).json('User Login Successfully');

        }, function(error) {
            return res.json(error);
        });
    } else {
        return res.json('User Already logedin');
    }
}); //account/login
/**********************************************************************************************************
 *                                                                                                        *
 *                                       GET LOGOUT  User                                                 *
 *                                                                                                        *
 **********************************************************************************************************/
router.get('/logout', middleware.isLoggedIn, function(req, res) {
    if (!req.session.user_login) {
        return res.status(401).JSON('Unexpeted Error');
    } else {
        req.session.destroy();
        return res.status(200).JSON('User logout Successfully');
    }
});
/**********************************************************************************************************
 *                                                                                                        *
 *                                       GET User Profile                                                 *
 *                                                                                                        *
 **********************************************************************************************************/
router.get('/profile', middleware.isLoggedIn, function(req, res) {

    return new Promise(function(resolve, rej) {
        conn.query('SELECT * FROM user WHERE user_id = ?', [req.session.user_id], (error, rows) => {
            if (error) {
                rrej(error);
            } else {
                conn.query('SELECT COUNT(*) as likecount FROM choice WHERE user_id = ? AND user_choice = "like"', [req.session.user_id], (error, likecount) => {
                    if (error) {
                        rej(error);
                    }
                    rows[0].likecount = likecount[0].likecount;
                });
                conn.query('SELECT COUNT(*) as dislikecount FROM choice WHERE user_id = ? AND user_choice = "dislike"', [req.session.user_id], (error, dislikecount) => {
                    if (error) {
                        rej(error);
                    }
                    rows[0].dislikecount = dislikecount[0].dislikecount;
                    resolve(rows[0])
                });
            };
        });
    }).then(function(data) {

        return res.status(200).json(data);

    }, function(error) {
        return res.send(error);
    });

});

module.exports = router;