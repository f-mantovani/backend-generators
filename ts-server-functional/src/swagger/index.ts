import { userErrorResponse, userCreatedResponse, userRequest } from './userRoutes/userSchemas.swagger'
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
	schemas: {
		user: {
			UserErrorResponse: userErrorResponse,
			UserCreatedResponse: userCreatedResponse,
			UserRequest: userRequest,
		},
	},

	tags: [{ name: 'User' }],
	paths: {
		'/api/user/signup': {
			post: createUser,
		},
	},
}
