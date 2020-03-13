const express = require('express')
const projectModel = require('../helpers/projectModel')

const project = express.Router()

project.use(express.json())

project.get('/', (req, res) => {
    projectModel.get()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(() => {
        res.status(500).json({error: 'error fetching post'})
    })
})

project.post('/', (req, res) => {
    projectModel.insert(req.body)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(() => {
        res.status(500).json({error: 'error posting post'})
    })
})

project.put('/:id', (req,res) => {
projectModel.update(req.params.id, req.body)
.then(response => {
    res.status(200).json(response)
})
.catch(() => {
    res.status(500).json({error: 'error updating post'})
})
})

project.delete('/:id', (req,res) => {
    projectModel.remove(req.params.id)
    .then(response => {
        res.status(200).json({message: 'project relevant to the id submitted has been deleted.'})
    })
    .catch(() => {
        res.status(500).json({error: 'error deleting post'})
    })
})

project.get('/:id', (req, res) => {
    projectModel.getProjectActions(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(() => {
        res.status(500).json({error: 'error fetching post actions'})
    })
})

module.exports = project