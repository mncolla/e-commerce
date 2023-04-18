import { Router } from 'express';
import { userRouter } from './user.routes';
import { productRouter } from './product.routes';
import { authRouter } from './auth.routes';
import { guestRouter } from './guest.routes';

export const apiRouter = Router();

apiRouter.use('/users/', userRouter);
apiRouter.use('/products/', productRouter);
apiRouter.use('/auth/', authRouter);
apiRouter.use('/guest/', guestRouter);
