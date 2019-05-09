var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: 'ogvrlhwik66mjr2k',
  password: 'sjkjap4tj3q7yjnw',
  database: "v1x7fgovpg15oipc"
});

module.exports = connection;