require("dotenv").config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/twitter", (re, res) => {
    res.json("wasay")
})
app.get("/hello", (re, res) => {
    res.send("<h1>Hello</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
