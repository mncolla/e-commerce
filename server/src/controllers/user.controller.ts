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
		res.status(200).json({ status: 'success', data: user });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

const getUsers = async (req: Request, res: Response) => {
	try {
		const users = prisma.user.findMany();
		res.status(200).json({ status: 'success', data: users });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

const createUser = async (req: Request, res: Response) => {
	const { username, email, password } = req.body;
	try {
		const user = await prisma.user.create({
			data: { username, email, password },
		});
		res.status(200).json({ status: 'success', data: user });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
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
		res.status(200).json({ status: 'sucess', data: user });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { username, email, password } = req.body;
	try {
		const user = await prisma.user.update({
			where: {
				id: parseInt(id),
			},
			data: { username, email, password },
		});
		res.status(200).json({ status: 'success', data: user });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

export default {
	getUsers,
	getUser,
	createUser,
	removeUser,
	updateUser,
};
