const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.get('/', (req, res) => {
    res.json({ data: 'Servidor rodando em EC2 AWS Services'})
})

server.get('/:name', (req, res) => {
    res.json({ data: req.params.name})
})

server.use((req, res) => {
    res.status(404)
    res.json({ message: 'url não encontrada' })
})

server.listen(3030, () => {
    console.log(`Server running`)
})