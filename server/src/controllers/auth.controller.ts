import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { PrismaClient, User } from '@prisma/client';
import { decodeToken, generateToken } from '../services/jwt.service';

const prisma = new PrismaClient();

const logIn = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		const user: User | any = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		const match = await bcrypt.compare(password, user!.password);

		if (!match) {
			res.status(404).json({
				status: 'error',
				message: 'User does not exists',
			});
			return;
		}

		const { id, username } = user;

		const token = generateToken(user.id);

		res.status(200).json({
			status: 'success',
			data: {
				token,
				user: {
					id,
					email,
					username,
				},
			},
		});
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

const signUp = async (req: Request, res: Response) => {
	try {
		const { username, email, password } = req.body;

		const exists = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (exists) {
			res.status(500).json({
				status: 'error',
				message: 'Email already been registered',
			});
			return;
		}

		const hashed = await bcrypt.hash(password, 10);
		await prisma.user.create({
			data: { username, email, password: hashed },
		});

		res.status(200).json({
			status: 'success',
			message: 'User has been created',
		});
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

const check = async (req: Request, res: Response) => {
	try {
		const token = req.headers.authorization;

		const decoded: any = decodeToken(token!);

		const user: User | any = await prisma.user.findUnique({
			where: {
				id: decoded.id,
			},
		});

		console.log(decoded);

		res.status(200).json({ status: 'success', data: user });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

export default {
	logIn,
	signUp,
	check,
};
