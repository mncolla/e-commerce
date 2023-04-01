import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const logIn = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		const match = await bcrypt.compare(password, user!.password);

		if (match) {
			res.status(200).json({ data: user });
			return;
		}

		res.status(404).json({ data: 'User does not exists' });
	} catch (error) {
		res.status(500).json({ data: error });
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
			res.status(500).json({ data: 'Email already been registered' });
			return;
		}

		const hashed = await bcrypt.hash(password, 10);
		const user = await prisma.user.create({
			data: { username, email, password: hashed },
		});

		res.status(200).json({ data: user });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

export default {
	logIn,
	signUp,
};
