import jwt from 'jsonwebtoken'
import { IUser } from '../models/User.model';

const secret = process.env.TOKEN_SECRET || 'you should add a good secret in an env'

export function createToken(payload: Partial<IUser>){
  return jwt.sign(payload, secret)
}