import { Router } from 'express';
import authController from '../controllers/auth.controller';
import authMiddleware from '../middlewares/auth.middleware';

export const authRouter = Router();

authRouter.post('/login', authController.logIn);
authRouter.post('/signup', authController.signUp);
authRouter.post('/me', [authMiddleware], authController.check);
