const {Schema, model} = require('mongoose');

const schema = new Schema({
  title: {type: String, required: true, unique: true},
  image: {type: String, required: true},
  description: {type: String, required: true, unique: true},
  ingredients: {type: Array, required: true},
  cuisine: {type: String, required: true},
  meal: {type: String, required: true},
});

module.exports = model('Recipe', schema);