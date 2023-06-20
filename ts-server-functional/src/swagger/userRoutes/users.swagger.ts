export const createUser = {
	tags: ['User'],
	summary: 'Creates a new user',
	requestBody: {
		content: {
			'application/json': {
				schema: {
					$ref: '#/schemas/user/UserRequest',
				},
			},
		},
	},
	responses: {
		201: {
			description: 'The username that was created',
			content: {
				'application/json': {
					schema: {
						$ref: '#/schemas/user/UserCreatedResponse',
					},
				},
			},
		},
		400: {
			description: "The error when the user doesn't provide some input",
			content: {
				'application/json': {
					schema: {
						$ref: '#/schemas/user/UserErrorResponse',
					},
				},
			},
		},
	},
}
