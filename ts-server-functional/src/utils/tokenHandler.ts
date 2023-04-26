import jwt from 'jsonwebtoken'
import { IUser } from '../models/User.model'
import { NextFunction, Request, Response } from 'express'
import { throwError } from './throwError'

const secret = process.env.TOKEN_SECRET || 'you should add a good secret in an env'

export function createToken(payload: Partial<IUser>) {
	return jwt.sign(payload, secret)
}

export function verifyToken(token: string) {
	return jwt.verify(token, secret)
}
