const Event = require("../models/event")

  const addNewEvent = async (req,res)=>{
    console.log(req.body)
   const event = await Event.create(req.body)
  return res.json({
      msg: 'New Event Added!' , event
    })
  }
   
  module.exports = { addNewEvent }