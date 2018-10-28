var middlevareObj = {};

middlevareObj.isLoggedIn = function(req, res, next) {

    if (req.session.user_login) {
        return next();
    } else {
        res.send('Login Required');
    }
};


module.exports = middlevareObj