import { Router } from 'express';
import userController from '../controllers/user.controller';
import authMiddleware from '../middlewares/auth.middleware';

const userRouter = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener usuarios
 *     description: Obtener usuarios registrados en la aplicación
 *     tags:
 *        - Users
 *     responses:
 *       200:
 *         description: Usuarios obtenidos
 *       500:
 *         description: Error al obtener los usuarios
 */
userRouter.get('/', [authMiddleware], userController.getUsers);

/**
 * @swagger
 * /users/id:
 *   get:
 *     summary: Obtener un usuario
 *     description: Obtener un usuario registrado en la aplicación
 *     tags:
 *        - Users
 *     responses:
 *       200:
 *         description: Usuario obtenido
 *       500:
 *         description: Error al obtener el usuario
 */
userRouter.get('/:id', [authMiddleware], userController.getUser);

/**
 * @swagger
 * /users/:
 *   post:
 *     summary: Crear un usuario
 *     description: Registrar un usuario en la aplicacion
 *     tags:
 *        - Users
 *     responses:
 *       200:
 *         description: Usuario creado
 *       500:
 *         description: Error al crear el usuario
 */
userRouter.post('/', [authMiddleware], userController.createUser);

/**
 * @swagger
 * /users/id:
 *   delete:
 *     summary: Eliminar un usuario
 *     description: Eliminar un usuario en la aplicacion
 *     tags:
 *        - Users
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *       500:
 *         description: Error al eliminar el usuario
 */
userRouter.delete('/:id', [authMiddleware], userController.removeUser);

/**
 * @swagger
 * /users/id:
 *   put:
 *     summary: Actualizar un usuario
 *     description: Actualizar un usuario en la aplicacion
 *     tags:
 *        - Users
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *       500:
 *         description: Error al actualizar el usuario
 */
userRouter.put('/:id', [authMiddleware], userController.removeUser);

export { userRouter };
