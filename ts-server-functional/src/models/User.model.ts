import { Schema, model } from 'mongoose'

export interface IUser {
  username: string
  password: string
  createdAt: Date
  updatedAt: Date
}

const userSchema = new Schema(
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

export default model<IUser>('User', userSchema)
