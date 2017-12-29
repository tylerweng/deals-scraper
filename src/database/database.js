import { MongoClient } from 'mongodb'

import config from './config.js'

let database

// Using mongolab url for now
const database_url = `mongodb://${config.username}:${config.password}@${config.url}`

MongoClient.connect(database_url, function (err, db) {
  if (err) {
    console.log('Error connecting to %s', database_url)
  } else {
    console.log('Successfully connected to %s', database_url)
  }
  database = db
})

export default database