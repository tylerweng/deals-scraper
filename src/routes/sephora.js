import { Router } from 'express'

import controller from '../services/sephora/controller'

const router = Router()

router.get('/', (req, res) => {
  controller.index(req, res)
})


export default router