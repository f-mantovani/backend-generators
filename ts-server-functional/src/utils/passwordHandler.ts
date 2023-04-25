import bcrypt from 'bcrypt'

export function hashPassword(password: string) {
	return bcrypt.hash(password, 12)
}

export function comparePassword(candidatePassword: string, password: string) {
	return bcrypt.compare(candidatePassword, password)
}
