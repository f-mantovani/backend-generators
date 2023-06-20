export const userErrorResponse = {
	type: 'object',
	properties: {
		message: {
			type: 'string',
			description: 'What kind of error the user is getting',
		},
		place: {
			type: 'string',
			description: 'A message indicating where the process is failing at the moment',
		},
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
}

export const userCreatedResponse = {
	type: 'object',
	properties: {
		username: {
			type: 'string',
			description: 'Username chosen on signup',
		},
	},
	example: {
		username: 'johndoe',
	},
}

export const userRequest = {
	type: 'object',
	properties: {
		username: {
			type: 'string',
			description: 'The username of the user.',
		},
		password: {
			type: 'string',
			description: 'The password of the user.',
		},
	},
	required: ['username', 'password'],
}
