import { userErrorResponse } from './userRoutes/userSchemas'
import { createUser } from './userRoutes/users.swagger'

export const swaggerDocument = {
	openapi: '3.0.1',
	info: {
		version: '1.0.0',
		title: 'API Documentation',
		description: 'The description here',
		contact: {
			name: 'Felipe Leite Mantovani',
			email: 'felipe.mantovani@outlook.com',
			github: 'https://github.com/f-mantovani',
		},
	},
	tags: [{ name: 'User' }],
	paths: {
		'/api/user/signup': {
			post: createUser,
		},
	},
	components: {
		schemas: {
			UserErrorResponse: userErrorResponse,
		},
	},
}
