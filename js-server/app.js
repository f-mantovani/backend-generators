import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { dbConnect } from './src/configs/dbConnect.js'
                       
import routes from './src/routes.js'
import notFound from './src/routes/not-found.js'
import errorHandling from './src/routes/error-handling.js'

const database = await dbConnect()

console.log(`Database connected to ${database.connections[0].name}`)

const app = express()

app.use(cors())

app.use(express.json())

app.use(morgan('dev'))

app.use('/api', routes)

app.use(notFound)

errorHandling(app)

export default app

