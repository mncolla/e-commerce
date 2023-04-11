import { NextFunction, Request, Response } from 'express';
import { decodeToken } from '../services/jwt.service';
import { TokenExpiredError } from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const { authorization } = req.headers;

	if (!authorization) {
		res.status(401).json({
			status: 'error',
			message: 'Token are not provided',
		});
		return;
	}

	try {
		decodeToken(authorization!);
	} catch (error) {
		if (error instanceof TokenExpiredError) {
			res.status(401).json({
				status: 'error',
				message: 'Session has been expired',
				code: 'token-expired',
			});
			return;
		}
	}

	next();
};

export default authMiddleware;
