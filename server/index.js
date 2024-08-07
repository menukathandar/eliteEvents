const express = require('express')
const dbConnect = require('./src/db/connection')
const userRoute = require('./src/routes/user')
const roomRoute = require('./src/routes/room')
const eventRoute = require('./src/routes/event')
const diningRoute = require('./src/routes/dining')
const cors = require('cors');
// const roomRoute = require('./src/models/room');


dbConnect()
const app = express()
app.use(cors())
require('dotenv').config()
//body parser
app.use(express.json())
app.use(userRoute)
app.use(roomRoute)
app.use(eventRoute)
app.use(diningRoute)

const port = process.env.PORT 
// app.post('/register', async(req, res) => {
//   console.log(req.body)

// app.get('/ping', (req, res) => {
//   res.send('pong');
// });

 
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

