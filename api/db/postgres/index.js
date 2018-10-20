var pg = require('pg');
const connectionString = 'pw';
const client = new pg.Client(connectionString);
client.connect();

module.exports = client;
