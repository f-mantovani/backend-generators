import  { connect, connection, disconnect } from "mongoose";
import log from './logger'

export async function connectDB() {
  const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ts-test'

  try {
    await connect(MONGO_URI)
    log.info(`Connected to DB at ${connection.name}`)
  } catch (error: any) {
    log.error(`Couldn't connect to a DB`)
    process.exit(1)
  }
}

export async function disconnectDB() {
  log.info(`Disconnecting from ${connection.name}`)
  await disconnect()
}