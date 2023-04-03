import { NextFunction, Request, Response } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const { authorization } = req.headers;

	if (!authorization) {
		res.status(401).json({
			status: 'error',
			message: 'Token are not provided',
		});
		return;
	}

	next();
};

export default authMiddleware;
