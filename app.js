const express = require('express')
const cors = require('cors')
const basketball = require('./basketball.json')

const app = express()

app.use(cors())
app.use(express.json())

//GET - All players
app.get('/players', (req, res) => {
    res.send(basketball.players)
})

module.exports = app;