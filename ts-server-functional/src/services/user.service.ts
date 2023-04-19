import UserModel, { IUser } from '../models/User.model'
import log from '../utils/logger'

export function createUser(newUser: Partial<IUser>) {
	return UserModel.create(newUser)
}
