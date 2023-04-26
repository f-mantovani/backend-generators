import { NextFunction, Response, Request } from "express"
import { throwError } from "../utils/throwError"
import { verifyToken } from "../utils/tokenHandler"

export interface IRequest extends Request {
	payload?: unknown
}

export function isAuthenticated(req: IRequest, _: Response, next: NextFunction){
  try {
		const bearer = req.get('Authorization')
		throwError(!Boolean(bearer), 401, 'JWT Middleware', 'Missing Authorization Header')

		const token = bearer?.split(' ')[1]
		throwError(!Boolean(token), 401, 'JWT Middleware', 'Token missing')

		const decoded = verifyToken(token!)

		req.payload = decoded

    next()
	} catch (err: any) {
		err.place = 'JWT middleware'
		next(err)
	}
}