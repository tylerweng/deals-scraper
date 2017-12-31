import { Router } from 'express'

import model from '../services/sephora/model'

const router = Router()

router.get('/', (req, res) => {
  model.find({}).lean().exec((err, doc) => {
    res.json(doc)
  })
})

export default router