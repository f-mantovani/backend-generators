import { Router } from 'express'
import { createUserHandler } from '../controllers/user.controller'
import { validate } from '../middlewares/validate'
import { createUserSchema } from '../schema/user.schema'

export function userRoutes(){
  const router = Router()

  router.post('/signup', validate(createUserSchema), createUserHandler)

  return router
  
}