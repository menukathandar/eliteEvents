const mongoose = require ('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
  roomNumber: String,
  isBooked: Boolean,
  bookedDuration: {StartDate: {type:String}, endDate:{type: String}},
  price: String,
  roomCategory: String,
  discount: String,

});
const Room = mongoose.model('Room', roomSchema);
module.exports= Room

// {startDate:'12/12/2024',endDate:'13/12/2024'} for testing