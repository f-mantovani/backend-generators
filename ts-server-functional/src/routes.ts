import { userRoutes } from './routes/user.routes'
import log from './utils/logger'
import { Response, Router } from 'express'

export function routes() {
	const router = Router()

	router.get('/health', (_, res: Response) => res.status(200).json({ message: 'OK' }))

	router.use('/user', userRoutes())
  
	return router
}
