var pg = require('pg');
const connectionString = process.env.PG_URL;
const client = new pg.Client(connectionString);
client.connect();

module.exports = client;
