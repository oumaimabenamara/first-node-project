const express = require('express')
const app = express()
const port = 3000

const connect = require('./database/connect')

app.get('/', (req, res) => {
  res.send('Hello Katoutou!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})