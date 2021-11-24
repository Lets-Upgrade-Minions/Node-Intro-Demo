const express = require('express')
const app = express()
const port = 3000

// Apis - get apis
app.get('/',  (req, res)=> {res.send('Hello World, How are you')})
app.get('/login',  (req, res)=> {res.send('Hello World, How are you')})
app.get('/signUp',  (req, res)=> {res.send('Hello World, How are you')})

// Apis - Post apis
app.post('/',  (req, res)=> {res.send('Hello World, How are you')})
app.post('/login',  (req, res)=> {res.send('Hello World, How are you')})
app.post('/signUp',  (req, res)=> {res.send('Hello World, How are you')})



app.listen(port, ()=>{console.log(`I got statred on port = ${port}`)})









// const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(3000)