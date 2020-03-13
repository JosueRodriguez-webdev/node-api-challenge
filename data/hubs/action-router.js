const express = require('express')
const actionModel = require('../helpers/actionModel')

const action = express.Router()

action.use(express.json())

action.get('/', (req, res) => {
    actionModel.get()
    .then(response => {
        res.status(200).json(response)
    })
})

action.post('/', (req, res) => {
actionModel.insert(req.body)
.then(response => {
    res.status(201).json(response)
})
})

action.put('/:id', (req,res) => {
actionModel.update(req.params.id, req.body)
.then(response => {
    
})
})

action.delete('/:id', (req,res) => {
    
})

module.exports = action