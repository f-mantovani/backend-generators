import { Router } from 'express'
import { createUserHandler, login, verifyUser } from '../controllers/user.controller'
import { validate } from '../middleware/validate'
import { createUserSchema } from '../schema/user.schema'
import { isAuthenticated } from '../middleware/isAuthenticated'
import { isSwaggerRequest } from '../middleware/swaggerMiddlewares'

export function userRoutes(){
  const router = Router()

  router.post('/signup', isSwaggerRequest, validate(createUserSchema), createUserHandler)

  router.post('/login', validate(createUserSchema), login)

  router.get('/verify', isAuthenticated, verifyUser)

  return router
  
}