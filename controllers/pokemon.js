const { Router } = require('express')
const express = require('express')
const router = express.Router()
const pokemon = require('../models/pokemon.js')

router.get('/', (req, res) => {
    res.json({
        status: 200,
        pokemon: pokemon
    })
})

router.get('/:id', (req, res) => {
    let pm = pokemon.find(ele => ele.id.toString() === req.params.id)
    res.json({
        status: 200, 
        pokemon: pm
    })
})

router.post('/', (req, res) => {
    pokemon.push(req.body)
    res.json({
        status: 200,
        pokemon: pokemon
    })
})

router.put('/:id', (req, res) => {
    let pm = pokemon.find(ele => ele.id.toString() === req.params.id)
    let index = pokemon.indexOf(pm)
    pm = req.body
    pokemon.splice(index, 1, pm)
    res.json({
        status: 200,
        pokemon: pokemon
    })
})

router.delete('/:id', (req, res) => {
    let pm = pokemon.find(ele => ele.id.toString() === req.params.id)
    let index = pokemon.indexOf(pm)
    pokemon.splice(index, 1)
    res.json({
        status: 200,
        pokemon: pokemon
    })
})

module.exports = router