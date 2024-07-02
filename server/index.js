const express = require('express')
const dbConnect = require('./src/db/connection')
const useRoute = require('./src/routes/user')
const cors = require('cors');

dbConnect()
const app = express()
app.use(cors())
require('dotenv').config()
//body parser
app.use(express.json())
app.use(useRoute)

const port = process.env.PORT 
// app.post('/register', async(req, res) => {
//   console.log(req.body)

 
// })
// app.post('/login',async(req,res)=>{
  
//   //  await User.create(req.body)
//   //  return res.json({msg: "Login Successful!"})
//  })
// app.get('/users', async(req, res) => {
//   const data = await User.find()
//   res.send(data)
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

