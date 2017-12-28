import { Router } from 'express'

import birds from './routes/birds'

const routes = Router()

routes.use('/birds', birds)

export default routes
