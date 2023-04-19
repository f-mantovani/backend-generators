import { Request, Response, NextFunction } from 'express'
import { createUser } from '../services/user.service'
import log from '../utils/logger'

export async function createUserHandler(req: Request, res: Response, next: NextFunction) {
	const newUser = {
		username: 'test',
		password: '123456',
	}

	try {
		const userCreated = await createUser(newUser)

		const { username } = userCreated
	
		const userToSend = { username }
	
		return res.status(200).json({ userToSend })
	} catch (err: any) {
		err.place = 'SignUp'
		err.statusCode = 400
		next(err)
	}

}
