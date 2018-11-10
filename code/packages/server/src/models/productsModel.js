const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = new Schema({
  code: String,
  name: String,
  price: String,
  description: String,
  stock: String,
  category: String,
  status: String,
  imageUrl: String,
  galleryImage: [],
});

module.exports = mongoose.model('products', productsSchema);
