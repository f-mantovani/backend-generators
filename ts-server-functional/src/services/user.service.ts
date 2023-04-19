import UserModel, { IUser } from '../models/User.model'
import log from '../utils/logger'

export async function createUser(newUser: IUser) {
	const createdUser = await UserModel.create(newUser)

	return createdUser
}
