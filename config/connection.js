var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: 'webuser',
  password: 'UCR',
  database: "burgers_db"
});

module.exports = connection;