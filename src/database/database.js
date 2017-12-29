import mongoose from 'mongoose'

import config from './config'

// Using mongolab url for now
const database_url = `mongodb://${config.username}:${config.password}@${config.url}`

mongoose.connect(database_url, {
  useMongoClient: true
}, (err) => {
  if (err) {
    console.log(`Failure to connect to ${config.url} caused by ${err}`)
  } else {
    console.log(`Sueccessfully connected to ${config.url}`)
  }
})

mongoose.Promise = global.Promise

const database = mongoose.connection

export default database