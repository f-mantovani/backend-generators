import 'dotenv/config'
import express, { Express, NextFunction, Request } from 'express'
import cors from 'cors'
import log, { requestLogger } from './utils/logger'
import { routes } from './routes'
import { connectDB } from './utils/connectDB'
import { errorHandling } from './routes/errorHandling'


export const app: Express = express()

export async function main() {
	log.info(`Server running on http://localhost:${process.env.PORT || 8080}/api`)

	await connectDB()
	
	app.use(express.json())

	app.use(cors())

	app.use(requestLogger)

	
	app.use('/api', routes())

	errorHandling(app)
}
