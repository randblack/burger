var express = require('express');
var app = express();
var burger = require('../models/burger');
var router = express.Router();
var exphbs = require("express-handlebars");
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
let uneaten = [];
let eaten = [];

router.get('/', function (req, res) {
  burger.burger.selectAll(function (data) {
    // for (i = 0; i < data.length; i++) {
    //   if (data[i].devoured == 1) {
    //     uneaten.push(data[i]);
    //     console.log('uneaten ' + eaten[i]);
    //   } else {
    //     eaten.push(data[i]);
    //   }
    // }
    res.render("index", { burgers: data });
  });
});

router.post('/add', function (req, res) {
  var newBurger = req.body.new_burger;
  burger.burger.insertOne(newBurger, function (data) {
    res.redirect('/')
  });
});

router.post('/update/:id', function (req, res) {
  var itemId = req.params.id;
  burger.burger.updateOne(itemId, function (data) {
    res.redirect('/')
  });
});

module.exports = {
  router
}