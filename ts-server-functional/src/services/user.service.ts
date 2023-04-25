import UserModel, { IUser } from '../models/User.model'
import log from '../utils/logger'

export function createUser(newUser: Partial<IUser>) {
	return UserModel.create(newUser)
}
export function findUser(username: string){
	return UserModel.findOne({ username })
}