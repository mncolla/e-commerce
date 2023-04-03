import { Router } from 'express';
import productController from '../controllers/product.controller';
import authMiddleware from '../middlewares/auth.middleware';

export const productRouter = Router();

productRouter.get('/', [authMiddleware], productController.getProducts);
productRouter.get('/:id', [authMiddleware], productController.getProduct);
productRouter.post('/', [authMiddleware], productController.createProduct);
productRouter.delete('/:id', [authMiddleware], productController.removeProduct);
