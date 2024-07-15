const Room = require("../models/room")

  const addNewRoom = async (req,res)=>{
    console.log(req.body)
   const rooms = await Room.create(req.body)
  return res.json({
      msg: 'New Room Added!' , rooms
    })
  }
   
  module.exports = { addNewRoom }