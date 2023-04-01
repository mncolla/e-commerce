import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const user = await prisma.user.findUnique({
			where: {
				id: parseInt(id),
			},
		});
		res.status(200).json({ data: user });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

const getUsers = async (req: Request, res: Response) => {
	try {
		const users = prisma.user.findMany();
		res.status(200).json({ data: users });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

const createUser = async (req: Request, res: Response) => {
	const { username, email, password } = req.body;
	try {
		const user = await prisma.user.create({
			data: { username, email, password },
		});
		res.status(200).json({ data: user });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

const removeUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const user = await prisma.user.delete({
			where: {
				id: parseInt(id),
			},
		});
		res.status(200).json({ data: user });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

export default {
	getUsers,
	getUser,
	createUser,
	removeUser,
};
