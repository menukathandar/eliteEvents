const express = require('express')
const dbConnect = require('./src/db/connection')
dbConnect()
const app = express()
require('dotenv').config()
//body parser
app.use(express.json())
const mongoose = require ('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String, //validation of database level
  address: String,
  dob: Date,
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
const port = process.env.PORT
app.post('/register', (req, res) => {
  console.log(req.body)
  User.create(req.body)
  
  res.send('ok')
})
app.get('/users', async(req, res) => {
  const data = await User.find()
  res.send(data)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

