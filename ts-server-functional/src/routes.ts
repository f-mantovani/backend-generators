import { userRoutes } from './routes/user.routes'
import { Router } from 'express'
import { swaggerDocument } from './swagger'
import swaggerUi from 'swagger-ui-express'
import { addSwaggerHeader } from './middleware/swaggerMiddlewares'

const swaggerUiOpts = {
	swaggerOptions: {
		plugins: [
			{
				statePlugins: {
					spec: {
						wrapSelectors: {
							allowTryItOutFor: () => () => false, // Disable "Try it out" button
						},
					},
				},
			},
		],
	},
};

export function routes() {
	const router = Router()
	router.use(
		'/',
		addSwaggerHeader,
		swaggerUi.serve,
		swaggerUi.setup(swaggerDocument,swaggerUiOpts))

	router.use('/user', userRoutes())

	return router
}
