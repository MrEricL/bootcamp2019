// npm install --save pg to be able to require pg
const pg = require("pg");
// configure the path to the database that you wish to interact with
const postgresUrl= 'postgres://localhost/fruits'
// create a new client 
const client = new pg.Client(postgresUrl)
// connect your client to your database
client.connect();
module.exports = client;