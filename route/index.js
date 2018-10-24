var express = require('express');
var router = express.Router();
var validator = require("email-validator");
var conn = require('../connection.js')
const md5 = require('md5');


/**********************************************************************************************************
 *                                                                                                        *
 *                                       POST Register User                                               *
 *                                                                                                        *
 **********************************************************************************************************/
router.post('/register', function(req, res) {

    var email = req.body.email;
    var firstname = (req.body.firstname === undefined) ? "" : req.body.firstname;
    var lastname = (req.body.lastname === undefined) ? "" : req.body.lastname;
    var gender = (req.body.gender === undefined) ? "" : req.body.gender;
    var dob = (req.body.dob === undefined) ? "" : req.body.dob;
    var password = (req.body.password === undefined) ? "" : req.body.password;

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
        console.log(validator.validate(email.trim()), password, email);
        res.json({ success: 0, message: "mandatory paramentes missing" });
    } else {
        conn.query('SELECT user_email FROM user WHERE user_email = ?', [email], (error, rows) => {
            if (error) {
                return res.json({ success: 0, message: 'Error in query ' + error });
            }
            if (rows.length > 0) {
                return res.json({ success: 0, message: "User Allready Exixt" });
            } else {
                return conn.query('INSERT INTO user SET ?', [user_account], (error, result) => {
                    if (error) {
                        console.log('error in query ' + error);
                        return res.json({ success: 0, message: "Error in query " + error });
                    }
                    return res.json({ success: 1, message: "User Registered  " });
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

    var email = req.body.email;
    var password = req.body.password;
    var userCategory = [];
    if (!email || !password) {
        return res.json({ success: 0, message: 'mandatory paramentes missing' });
    } else {
        conn.query('SELECT * FROM user WHERE user_email = ?', [email], (error, row) => {
            if (error) {
                return res.json({ success: 0, message: 'Error in query ' + error });
            } else {
                if (row.length !== 1) {
                    return res.json({ success: 0, message: 'No user found' });
                } else if (md5(password) == row[0].user_password) {
                    return res.json({ success: 1, message: 'Login Successfully ', user: row });
                } else if (md5(password) != row[0].user_password) {
                    return res.json({ success: 0, message: 'Wrong password' });
                } else {
                    return res.json({ success: 0, message: 'Unexpeted Error' });
                }
            }
        });
    }
}); //account/login

module.exports = router;