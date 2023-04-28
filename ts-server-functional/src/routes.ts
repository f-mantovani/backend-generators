import { userRoutes } from './routes/user.routes'
import { Response, Router } from 'express'
import { swaggerDocument } from './swagger'
import swaggerUi from 'swagger-ui-express'

export function routes() {
	const router = Router()

	router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

	router.use('/user', userRoutes())
  
	return router
}
