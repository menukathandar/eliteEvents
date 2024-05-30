// const express = require('express')
// const app = express()
// const port = 5000

// app.get('/me', (req, res) => {
//   res.send({
//     name:"kaylin",
//     balance: 100000,
//     rewardPoint: 100
//   })
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// const express = require('express')
// const app = express()
// const port = 4000

// app.get('/products', (req, res) => {
//   res.send(['hawkins','baltra','panasonic'])
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// server.mjs
const{ createServer } = require('node:http');
const server = createServer((req, res) => {
  res.end('Hello World!\n');
});
server.listen(4000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
