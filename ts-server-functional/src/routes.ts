import { userRoutes } from './routes/user.routes'
import { Router } from 'express'
import { swaggerDocument } from './swagger'
import swaggerUi from 'swagger-ui-express'
import { addSwaggerHeader } from './middleware/swaggerMiddlewares'

export function routes() {
	const router = Router()

	router.use('/', addSwaggerHeader, swaggerUi.serve)
	router.get('/', swaggerUi.setup(swaggerDocument))

	router.use('/user', userRoutes())

	return router
}
