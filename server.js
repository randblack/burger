var express = require('express');
var router = require('./controllers/burgers_controller');
var app = express();
var PORT = 8080;
var connection = require('./config/connection');

connection.connect(function (err) {
  if (err) throw err;
  console.log('mysql connection success')
});

app.use(router.router);

app.listen(PORT, function () {
  console.log("web server is running on port: " + PORT)
});