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
		message: 'Missing username',
		place: 'Validate',
	},
}
