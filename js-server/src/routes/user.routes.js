import userController from "../controllers/user.controllers.js";

import { Router } from "express";
import { verifyToken } from "../middleware/isAuthenticated.js";

const router = Router()

router.post('/signup', userController.signup)

router.post('/login', userController.login)

router.get('/verify', verifyToken, userController.verify)

export default router