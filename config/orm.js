var connection = require('connection');

var selectAll = connection.selectAll(function (err) {
  if (err) throw err;

});

var insertOne = connection.insertOne(function (err) {
  if (err) throw err;

});

var updateOne = connection.updateOne(function (err) {
  if (err) throw err;

});

module.exports = {
  selectAll,
  insertOne,
  updateOne
}