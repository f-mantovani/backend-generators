interface IError {
	toCheck: boolean
	statusCode: number
	place: string
	message: string
}

export function throwError(toCheck: boolean, statusCode: number, place: string, message: string) {
	if (toCheck) {
		const err = {
		  statusCode,
			message,
			place,
		}

		throw err
	}
}
