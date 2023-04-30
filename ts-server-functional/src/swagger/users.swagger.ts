export const createUser = {
	tags: ['User'],
	description: 'Creates a new user',
	responses: {
		'201': {
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
