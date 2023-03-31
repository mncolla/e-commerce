import { Router } from 'express';
import authController from '../controllers/auth.controller';

export const authRouter = Router();

authRouter.post('/login', authController.logIn);
authRouter.post('/signup', authController.signUp);
