var express = require('express');
var router = require('./controllers/burgers_controller');
var app = express();
var PORT = process.env.PORT || 8080;
var connection = require('./config/connection');
var exphbs = require("express-handlebars");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

connection.connect(function (err) {
  if (err) throw err;
  console.log('mysql connection success')
});

app.use(router.router);

app.listen(PORT, function () {
  console.log("web server is running on port: " + PORT)
});