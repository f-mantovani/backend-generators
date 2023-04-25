import { Router } from 'express'
import { createUserHandler, login } from '../controllers/user.controller'
import { validate } from '../middlewares/validate'
import { createUserSchema } from '../schema/user.schema'

export function userRoutes(){
  const router = Router()

  router.post('/signup', validate(createUserSchema), createUserHandler)
  router.post('/login', validate(createUserSchema), login)

  return router
  
}