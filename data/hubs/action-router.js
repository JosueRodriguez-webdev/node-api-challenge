const express = require('express')
const actionModel = require('../helpers/actionModel')

const action = express.Router()

action.use(express.json())

action.get('/', (req, res) => {
    actionModel.get()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(() => {
        res.status(500).json({error: 'error fetching action'})
    })
})

action.post('/', (req, res) => {
actionModel.insert(req.body)
.then(response => {
    res.status(201).json(response)
})
.catch(() => {
    res.status(500).json({error: 'error posting action'})
})
})

action.put('/:id', (req,res) => {
actionModel.update(req.params.id, req.body)
.then(response => {
    res.status(200).json(response)
})
.catch(() => {
    res.status(500).json({error: 'error updating action'})
})
})

action.delete('/:id', (req,res) => {
    actionModel.remove(req.params.id)
    .then(() => {
        res.status(200).json({message: 'action was successfully deleted, congrats'})
    })
    .catch(() => {
        res.status(500).json({error: 'error deleting action'})
    })
})

module.exports = action