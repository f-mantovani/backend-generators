import 'dotenv/config'
import express, { Express, NextFunction, Request } from 'express'
import cors from 'cors'
import log from './utils/logger'
import { routes } from './routes'
import { connectDB } from './utils/connectDB'

export const app: Express = express()

export async function main() {
	log.info(`Server connected to ${process.env.PORT || 8080}`)

	await connectDB()
	
	app.use(express.json())

	app.use((req: Request, _, next: NextFunction) => {
		log.info(`${req.method} ${req.path}`)
		next()
	})

	app.use('/api', routes())
}
