import { Router } from 'express';
import userController from '../controllers/user.controller';
import authMiddleware from '../middlewares/auth.middleware';

export const userRouter = Router();

userRouter.get('/', [authMiddleware], userController.getUsers);
userRouter.get('/:id', [authMiddleware], userController.getUser);
userRouter.post('/', [authMiddleware], userController.createUser);
userRouter.delete('/:id', [authMiddleware], userController.removeUser);
