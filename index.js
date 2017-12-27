import express from 'express'
import server from './src/server'


server.get('/', (req, res) => res.send('Hello World!'))

server.listen(3000, () => console.log('Example app listening on port 3000!'))