const mongoose = require('mongoose');

async function DBConnection(url) {
  return mongoose.connect(url);
}

module.exports = {
  DBConnection
}