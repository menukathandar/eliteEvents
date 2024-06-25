const express = require('express')
const bcrypt = require('bcrypt');
const saltRounds = 10; //more round more safe
const dbConnect = require('./src/db/connection')
dbConnect()
const cors = require('cors');
const app = express()
require('dotenv').config()
const jwt = require('jsonwebtoken')
//body parser
app.use(express.json())
app.use(cors())
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
const port = process.env.PORT 
app.post('/register', async(req, res) => {
  console.log(req.body)

  const hashPassword =await bcrypt.hash(req.body.password,saltRounds)
  req.body.password = hashPassword
  const emailExist = await User.exists({email: req.body.email})
  const usernameExist = await User.exists({username: req.body.username})
  if(emailExist){
    return res.status(409).json({msg: "Email already exists. Try another one!"})
  }else if(usernameExist){
    return res.status(409).json({msg: "Username already exists. Try another one!"})
  }
  await User.create(req.body)
  return res.json({msg: "User Registered!"})
})
app.post('/login',async(req,res)=>{
  const user = await User.findOne({username: req.body.username})
   if(user){
    console.log(user)
     const isMatched = await bcrypt.compare(req.body.password,user.password)
     if(isMatched){
      const token = jwt.sign({ username: req.body.username }, process.env.SECRET_KEY);
      res.json({msg: "Authorized!",token,user})
     }else{
       res.status(401).json({msg: "Password not matched!"})
    }
   }else{
     res.status(401).json({msg: "User not Registered!"})
   }
  //  await User.create(req.body)
  //  return res.json({msg: "Login Successful!"})
 })
app.get('/users', async(req, res) => {
  const data = await User.find()
  res.send(data)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

