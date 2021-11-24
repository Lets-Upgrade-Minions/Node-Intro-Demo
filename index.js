const express = require('express')
const app = express()
const port = 3000

// Apis and routes
app.get('/', function (req, res) {
  res.send('Hello World, How are you')
})

app.listen(port, ()=>{console.log(`I got statred on port = ${port}`)})









// const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(3000)