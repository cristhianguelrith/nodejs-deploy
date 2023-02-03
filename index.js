const express = require('express')
const app = express() 

app.get('/', function (req, res) {
  res.send('Hello World! My name is Cristhian!')
})

app.listen(process.env.PORT || 3000)