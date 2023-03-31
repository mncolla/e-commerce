import { Request, Response } from 'express';
import { User } from '../models/user.model';
import bcrypt from 'bcrypt';

const logIn = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({
			where: {
				email,
			},
		});

		const match = await bcrypt.compare(password, user!.password);

		if (match) {
			res.status(200).json({ data: user });
		}

		res.status(404).json({ data: 'User does not exists' });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

const signUp = async (req: Request, res: Response) => {
	try {
		const { username, email, password } = req.body;

		const exists = await User.findOne({
			where: {
				email,
			},
		});

		if (exists) {
			res.status(500).json({ data: 'Email already been registered' });
		}

		const hashed = await bcrypt.hash(password, 10);
		const user = await User.create({ username, email, password: hashed });

		res.status(200).json({ data: user });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

export default {
	logIn,
	signUp,
};
