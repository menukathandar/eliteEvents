const User = require("../models/user")
const bcrypt = require('bcrypt');
const saltRounds = 10; //more round more safe
const jwt = require('jsonwebtoken')
const findAllUsers = async(req,res)=>{
    const data = await User.find()
    res.json(data)
  }
  const registerUser =  async(req,res)=>{
    // console.log(req.body)
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
  }
  const loginUser =  async (req, res) => {
    try{
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
    }catch(err){
    res.status(500).json({msg: "Something went wrong!"})
  }
}
module.exports = { findAllUsers,loginUser ,registerUser}