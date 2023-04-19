import { Router } from 'express'
import { createUserHandler } from '../controllers/user.controller'

export function userRoutes(){
  const router = Router()

  router.get('/', createUserHandler)

  return router
}