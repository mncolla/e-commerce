import { Router } from 'express';
import userController from '../controllers/user.controller';

export const userRouter = Router();

userRouter.get('/', userController.getUsers);
userRouter.get('/:id', userController.getUser);
userRouter.post('/', userController.createUser);
userRouter.delete('/:id', userController.removeUser);
