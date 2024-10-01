const mongoose = require('mongoose');

const OffenseSchema = new mongoose.Schema({
  section: {
    type: Number,
    required: true,
    unique: true
  },
  offense: {
    type: String,
    required: true
  },
  bailable: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Offense', OffenseSchema);
