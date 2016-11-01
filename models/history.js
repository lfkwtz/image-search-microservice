const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  term: String,
  when: { type: Date, default: Date.now }
});

const History = mongoose.model('History', historySchema);
module.exports = History;
