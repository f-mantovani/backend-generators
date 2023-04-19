import 'dotenv/config'
import express, { Express, NextFunction, Request } from 'express'
import cors from 'cors'
import log, { requestLogger } from './utils/logger'
import { routes } from './routes'
import { connectDB } from './utils/connectDB'
import { errorHandling } from './routes/errorHandling'

export const app: Express = express()

export async function main() {
	log.info(`Server connected to ${process.env.PORT || 8080}`)

	await connectDB()
	
	app.use(express.json())

	app.use(requestLogger)
	
	app.use('/api', routes())

	errorHandling(app)
}
