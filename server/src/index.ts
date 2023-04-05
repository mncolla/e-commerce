// Import the express in typescript file
import express from 'express';
import { apiRouter } from './routes';
import dotenv from 'dotenv';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Initialize the express engine
const app: express.Application = express();

// Swagger config
const swaggerOptions = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Mi Aplicación API',
			version: '1.0.0',
			description: 'Documentación de API para Mi Aplicación',
		},
		servers: [
			{
				url: 'http://localhost:3000', // Cambiar URL base según tu configuración
			},
		],
	},
	apis: ['**/*.ts'], // Cambiar ruta de tus rutas según tu configuración
};

// Swagger init
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Swagger server
app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Take a port 3000 for running server.
const port: number = 3000;

// Environment variables
dotenv.config();

// To take json format from response.
app.use(express.json());

// Routes
app.use('/api/v1', apiRouter);

// Server setup
app.listen(port, () => {
	console.log(`TypeScript with Express
         http://localhost:${process.env.PORT || 3000}/`);
});
