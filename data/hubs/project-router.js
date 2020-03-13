const express = require('express')
const projectModel = require('../helpers/projectModel')

const project = express.Router()

project.use(express.json())

project.get('/', (req, res) => {
    projectModel.get()
    .then(response => {
        res.status(200).json(response)
    })
})

project.post('/', (req, res) => {
    projectModel.insert(req.body)
    .then(response => {
        res.status(201).json(response)
    })
})

project.put('/:id', (req,res) => {
projectModel.update(req.params.id, req.body)
.then(response => {
    res.status(200).json(response)
})
})

project.delete('/:id', (req,res) => {
    projectModel.remove(req.params.id)
    .then(response => {
        res.status(200).json({message: 'project relevant to the id submitted has been deleted.'})
    })
})

module.exports = project