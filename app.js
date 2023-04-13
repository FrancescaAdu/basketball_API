const express = require("express")
const cors = require("cors")
const basketball = require("./basketball.json")

const app = express()

app.use(cors())
app.use(express.json())

// build api
app.get('/', (req, res) => {
    // res.send("Welcome to the basketball API")
    res.send(basketball)
})

module.exports = app;