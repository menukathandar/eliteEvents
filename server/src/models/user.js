const mongoose = require ('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String, //validation of database level
  address: String,
  email: String,
  username: String,
  password: String,
  role: {
    type: String,
    enum : ['admin','user'],
    default: 'user'
  }, 
});
const User = mongoose.model('User', userSchema);
module.exports= User