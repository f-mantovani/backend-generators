import { Request, Response, NextFunction } from 'express'
import { createUser } from '../services/user.service'
import log from '../utils/logger'
import { CreateUserInput } from '../schema/user.schema'

export async function createUserHandler(req: Request<{}, {}, CreateUserInput>, res: Response, next: NextFunction) {
	log.info(req.body)

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
