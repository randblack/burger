var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: 'webuser',
  password: 'UCR',
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('mysql connection success')
});

module.exports = {
  connection
}