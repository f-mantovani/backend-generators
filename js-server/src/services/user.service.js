import User from '../models/User.model.js'
import query from './mongoose.service.js'

const UserClass = {
	createUser(user) {
		return query.create(User, user)
	},

	findOne(username, email) {
		return query.getOne(User, { $or: [{ username }, { email }] })
	},

	deleteUsers() {
		return query.deleteMany(User)
	},

	deleteOne(username, email){
		return query.deleteOne(User, { $or: [{ username }, { email }] })
	}
}

export default UserClass
