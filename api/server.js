var express = require("express");
var bodyParser = require("body-parser");

var pg = require('pg');

const connectionString = 'https://lingo.cqaydiju3hhf.us-east-2.rds.amazonaws.com';

const client = new pg.Client(connectionString);

client.connect();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 4000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

var session = require("express-session");
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: "any string"
    })
);

app.listen(PORT);