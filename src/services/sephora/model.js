import mongoose from 'mongoose'

import schema from './schema'

const Model = mongoose.model('Sephora', schema)

export default Model