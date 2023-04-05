import { Router } from 'express';
import productController from '../controllers/product.controller';
import authMiddleware from '../middlewares/auth.middleware';

export const productRouter = Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtener productos
 *     description: Obtener productos registrados en la aplicación
 *     tags:
 *        - Products
 *     responses:
 *       200:
 *         description: Productos obtenidos
 *       500:
 *         description: Error al obtener los productos
 */
productRouter.get('/', [authMiddleware], productController.getProducts);

/**
 * @swagger
 * /products/id:
 *   get:
 *     summary: Obtener producto
 *     description: Obtener producto registrado por usuario
 *     tags:
 *        - Products
 *     responses:
 *       200:
 *         description: Productos obtenidos
 *       500:
 *         description: Error al obtener los productos
 */
productRouter.get('/:id', [authMiddleware], productController.getProduct);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Crear producto
 *     description: Crear producto registrado por usuario
 *     tags:
 *        - Products
 *     responses:
 *       200:
 *         description: Producto creado
 *       500:
 *         description: Error al crear el producto
 */
productRouter.post('/', [authMiddleware], productController.createProduct);

/**
 * @swagger
 * /products/id:
 *   delete:
 *     summary: Eliminar producto
 *     description: Eliminar producto registrado por usuario
 *     tags:
 *        - Products
 *     responses:
 *       200:
 *         description: Producto eliminado
 *       500:
 *         description: Error al eliminar el producto
 */
productRouter.delete('/:id', [authMiddleware], productController.removeProduct);

/**
 * @swagger
 * /products/id:
 *   put:
 *     summary: Actualizar producto
 *     description: Actualizar producto indicado
 *     tags:
 *        - Products
 *     responses:
 *       200:
 *         description: Producto actualizado
 *       500:
 *         description: Error al actualizar el producto
 */
productRouter.put('/:id', [authMiddleware], productController.updateProduct);
