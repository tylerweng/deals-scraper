import { Router } from 'express'

import birds from './routes/birds'

const router = Router()

router.use('/birds', birds)

export default router
