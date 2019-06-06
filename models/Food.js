const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  calories: {
    type: Number,
    required: true
  },

  protein: {
    type: Number,
    required: true
  },

  carbohydrate: {
    type: Number,
    required: true
  },

  fat: {
    type: Number,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Food = mongoose.model('food', FoodSchema);
