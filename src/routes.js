import { Router } from 'express'

import sephora from './routes/sephora'

const router = Router()

router.use('/sephora', sephora)

export default router
