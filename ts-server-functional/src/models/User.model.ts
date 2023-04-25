import { Document, Schema, model } from 'mongoose'
import { hashPassword } from '../utils/passwordHandler'

export interface IUser {
  username: string
  password: string
  createdAt: Date
  updatedAt: Date
}

const userSchema = new Schema<IUser>(
	{
		username: {
			type: String,
			requires: true,
		},
		password: {
			type: String,
			required: true,
      select: false,
		},
	},
	{ timestamps: true }
)

userSchema.pre('save', async function(next) {
	let user = this 

	if(!user.isModified('password')){
		return next()
	}

	const hash = await hashPassword(user.password)
	user.password = hash

	return next()
})

export default model<IUser>('User', userSchema)
