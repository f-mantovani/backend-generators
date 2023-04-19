import { Request, Response } from 'express'
import { createUser } from '../services/user.service'
import log from '../utils/logger'

export async function createUserHandler(req: Request, res: Response) {
	const newUser = {
		username: 'test',
		password: '123456',
	}

	const userCreated = await createUser(newUser)

	const { username } = userCreated

	const userToSend = { username }

	return res.status(200).json({ userToSend })
}
