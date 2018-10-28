const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema({
  email: String,
  password: String,
  address: String,
  phonenumber: String,
  role: String,
  token: String,
});

module.exports = mongoose.model('users', usersSchema);
