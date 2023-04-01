// Import the express in typescript file
import express from 'express';
import { apiRouter } from './routes';

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: number = 3000;

// To take json format from response.
app.use(express.json());

// Routes
app.use('/api/v1', apiRouter);

// Server setup
app.listen(port, () => {
	console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
