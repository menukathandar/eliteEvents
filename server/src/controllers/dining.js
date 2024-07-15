const Dining = require("../models/dining")

  const addNewDiningCategory = async (req,res)=>{
    console.log(req.body)
   const dining = await Dining.create(req.body)
  return res.json({
      msg: 'New Dining Category Added!' , dining
    })
  }
   
  module.exports = { addNewDiningCategory }