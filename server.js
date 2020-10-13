const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.urlencoded({extended:false}));
app.use(express.json())
const logger = require('morgan')
const port = process.env.PORT
app.use(logger('dev'))


const pokemonController = require('./controllers/pokemon.js')
app.use('/pokemon', pokemonController)


app.listen(port, () => {
    console.log('listening on port', port)
})