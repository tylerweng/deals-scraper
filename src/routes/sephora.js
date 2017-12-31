import { Router } from 'express'

import controller from '../services/sephora/controller'

const router = Router()

router.get('/', (req, res) => {
  controller.index(req, res)
})

router.get('/:brand_name/:product_name', (req, res) => {
  controller.findByBrandNameAndProductName(req, res)
})


export default router