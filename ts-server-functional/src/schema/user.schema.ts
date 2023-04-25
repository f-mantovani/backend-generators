import z from 'zod'

export const createUserSchema = z.object({
	body: z.object({
		username: z.string({
			required_error: 'Username is required',
		}),
		password: z
			.string({
				required_error: 'Password is required',
			})
			.min(6, 'password too short - must be at least 6 characters')
			.max(20, 'password too long - maximum 20 characters'),
	}),
})

export type CreateUserInput = z.TypeOf<typeof createUserSchema>
