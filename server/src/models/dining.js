const mongoose = require('mongoose')
const { Schema } = mongoose;

const diningSchema = new Schema({
  diningCategory: String

});
const Dining = mongoose.model('Dining', diningSchema);
module.exports= Dining


