var connection = require('./connection');

var orm = {
  selectAll: function (table, callback) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  insertOne: function (itemName, table, column, callback) {
    var queryString = "INSERT INTO " + table + " (" + column + ") VALUES ('" + itemName + "');";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  // updateOne: function (table, callback) {
  //   var queryString = "UPDATE " + table + " SET " + column1 + " = '1' WHERE " + column2 + " = " + itemName + ";";
  //   connection.query(queryString, function (err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     callback(result);
  //   });
  // }
};

module.exports = {
  orm
};