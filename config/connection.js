var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  port: 3306,
  user: 'ba2abb1a76a0cd',
  password: 'ab9c6df8',
  database: "heroku_9657cff2c406291"
});

module.exports = connection;