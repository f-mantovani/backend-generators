export const createUser = {
	tags: ['User'],
	description: 'Creates a new user',
	responses: {
		headers: {
			'swagger-ui': {
				description: 'The origin of the Swagger documentation page',
				schema: {
					type: 'string',
				},
			},
		},
		201: {
			description: 'The username that was created',
			content: {
				'application/json': {
					schema: {
						type: 'object',
						items: {
							username: {
								type: 'string',
								description: 'Username chosen on signup',
							},
						},
						example: {
							username: 'johndoe',
						},
					},
				},
			},
		},
		400: {
			description: "The error when the user doesn't provide some input",
			content: {
				'application/json': {
					schema: {
						$ref: '#/components/schemas/UserErrorResponse',
					},
					example: {
						'Missing username': {
							username: 'Username is required',
							place: 'Validate',
						},
						'Missing password': {
							password: 'Password is required',
							place: 'Validate',
						},
					},
				},
			},
		},
	},
}

