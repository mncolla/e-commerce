import { Request, Response } from 'express';
import { User } from '../models/user.model';

const getUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const user = await User.findByPk(id);
		res.status(200).json({ data: user });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

const getUsers = async (req: Request, res: Response) => {
	try {
		const users = User.findAll();
		res.status(200).json({ data: users });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

const createUser = async (req: Request, res: Response) => {
	const { username, email } = req.body;
	try {
		const user = await User.create({ username, email });
		res.status(200).json({ data: user });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

const removeUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const user = await User.destroy({
			where: {
				id,
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
