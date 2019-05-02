var express = require('express');
var app = express();
var burger = require('../models/burger');
var router = express.Router();
var exphbs = require("express-handlebars");
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

router.get('/', function (req, res) {
  burger.burger.selectAll(function (dataReceivedFromDatabase) {
    console.log(dataReceivedFromDatabase);
    // res.render("index");
  });
});

router.get('/', function (req, res) {
  burger.burger.insertOne(function (dataReceivedFromDatabase) {
    console.log(dataReceivedFromDatabase);
    // res.render("index");
  });
});

// router.get('/', function (req, res) {
//   burger.burger.updateOne("Beyond Burger", function (dataReceivedFromDatabase) {
//     console.log(dataReceivedFromDatabase);
//     res.render("index");
//   });
// });

module.exports = {
  router
}

// is this where handlebars is required/used? yes

