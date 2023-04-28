export const createUser = {
	tags: ['User'],
	description: 'Creates a new user',
	operationId: 'createUser',
	responses: {
		'200': {
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
					},
				},
			},
		},
	},
}
