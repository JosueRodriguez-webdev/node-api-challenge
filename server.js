const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

// Routes
const project = require('./data/hubs/project-router')
const action = require('./data/hubs/action-router')
// ---> Routes end.

const server = express()

server.use(helmet())
server.use(cors())

server.get('/', (req, res) => {
    res.send(`Server is running correctly`)
})

server.use('/api/project', project)

server.use('/api/action', action)

module.exports = server