import { Router } from 'express';
import productController from '../controllers/product.controller';

export const productRouter = Router();

productRouter.get('/', productController.getProducts);
productRouter.get('/:id', productController.getProduct);
productRouter.post('/', productController.createProduct);
productRouter.delete('/:id', productController.removeProduct);
