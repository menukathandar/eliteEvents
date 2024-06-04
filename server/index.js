const express = require('express')
const bcrypt = require('bcrypt');
const saltRounds = 10; //more round more safe
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
app.post('/register', async(req, res) => {
  const hashPassword =await bcrypt.hash(req.body.password,saltRounds)
  req.body.password = hashPassword
  const userExist = await User.exists({email: req.body.email})
  if(userExist){
    return res.json({msg: "Email already exists. Try another one!"})
  }
  await User.create(req.body)
  return res.json({msg: "User Registered!"})
  // console.log(req.body)
  // await User.create(req.body)
  // res.send('user registered')
})
app.get('/users', async(req, res) => {
  const data = await User.find()
  res.send(data)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

