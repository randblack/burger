var orm = require('../config/orm');

var burger = {
  selectAll: function (callback) {
    orm.orm.selectAll("burgers", function (res) {
      callback(res);
    });
  },

  insertOne: function (itemName, callback) {
    orm.orm.insertOne(itemName, "burgers", "burger_name", function (res) {
      callback(res);
    });
  },

  updateOne: function (itemName, callback) {
    orm.orm.updateOne(itemName, "burgers", "devoured", "id", function (res) {
      callback(res);
    });
  }
};

module.exports = {
  burger,
}