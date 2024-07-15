const mongoose = require('mongoose')
const { Schema } = mongoose;

const eventSchema = new Schema({
  eventType: String, // String is shorthand for {type: String}
  isBooked: Boolean,
  eventPrice: String,
  discount: String

});
const Event = mongoose.model('Event', eventSchema);
module.exports= Event


