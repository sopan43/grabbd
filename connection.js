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

function handleDisconnect(client) {
  client.on('error', function (error) {
    if (!error.fatal) return;
    if (error.code !== 'PROTOCOL_CONNECTION_LOST') throw err;

    console.error('> Re-connecting lost MySQL connection: ' + error.stack);

    // NOTE: This assignment is to a variable from an outer scope; this is extremely important
    // If this said `client =` it wouldn't do what you want. The assignment here is implicitly changed
    // to `global.mysqlClient =` in node.
    mysqlClient = mysql.createConnection(client.config);
    handleDisconnect(mysqlClient);
    mysqlClient.connect();
  });
};

module.exports = connection;