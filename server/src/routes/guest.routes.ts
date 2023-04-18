import { Router } from 'express';
import guestController from '../controllers/guest.controller';

export const guestRouter = Router();

guestRouter.post('/deals', guestController.deals);
guestRouter.post('/latest-products', guestController.latestProducts);
guestRouter.post('/recommendations', guestController.recommendations);
