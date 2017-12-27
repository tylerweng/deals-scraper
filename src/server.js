import path from 'path'
import express from 'express'
import app from './app'
import serveFavicon from 'serve-favicon'

const staticPath = path.resolve(__dirname, '../static')
// Initialize express server
const setServer = function(callback) {
  const server = express()

  // Application-level environment vars
  server.set('env', process.env.NODE_ENV || 'development')
  server.set('host', process.env.HOST || '0.0.0.0')
  server.set('port', process.env.PORT || 3001)

  // Application-level middleware
  // server.use(serveFavicon(`${staticPath}/assets/favicon.ico`))
  server.use((err, req, res, next) => {
    console.log('Error on request %s %s', req.method, req.url)
    console.log(err)
    console.log(err.stack)
    res.status(500).send('Uncaught server error')
  })

  const port = server.get('port')
  server.listen(port, console.log("Example app listening on port " + port))
  return server;
}
const server = setServer();

export default server