import { Request, Response, NextFunction } from 'express'
import { createUser, findUser } from '../services/user.service'
import log from '../utils/logger'
import { CreateUserInput } from '../schema/user.schema'
import { comparePassword, hashPassword } from '../utils/passwordHandler'
import { throwError } from '../utils/throwError'
import { createToken } from '../utils/tokenHandler'

export async function createUserHandler(
	req: Request<{}, {}, CreateUserInput['body']>,
	res: Response,
	next: NextFunction
) {
	try {
		const userCreated = await createUser(req.body)

		const { username } = userCreated

		const userToSend = { username }

		return res.status(201).json(userToSend)
	} catch (err: any) {
		err.place = 'SignUp'
		err.statusCode = 400
		next(err)
	}
}

export async function login(
	req: Request<{}, {}, CreateUserInput['body']>,
	res: Response,
	next: NextFunction
) {
	try {
		const userFromDB = await findUser(req.body.username).select('+password')

		if (!userFromDB) {
			throwError(Boolean(userFromDB), 400, 'signup', "We couldn't authenticate the user")
		}

		const verifyPassword = await comparePassword(req.body.password, userFromDB!.password)

		if (!verifyPassword) {
			throwError(!verifyPassword, 400, 'signup', "We couldn't authenticate the user")
		}

		const payload = {
			username: userFromDB!.username,
		}

		const token = createToken(payload)

		return res.status(200).json({ token })
	} catch (err: any) {
		next(err)
	}
}
