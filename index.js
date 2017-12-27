import express from 'express'
import server from './src/server'


server.get('/', (req, res) => res.send('Hello World!'))
server.get('/test', (req, res) => res.send('Hello World!'))
