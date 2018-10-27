var mysql = require('mysql');
var connection = mysql.createConnection({
    user: process.env.GRABBD_DB_USER,
    password: process.env.GRABBD_DB_PASSWORD,
    database: process.env.GRABBD_DB,
    host: process.env.GRABBD_DB_HOST

});

connection.connect(function(error) {
    if (error) {
        console.error('error connecting: ' + error.stack);
        return;
    }
    console.log('Connecting.... ');
});

module.exports = connection;