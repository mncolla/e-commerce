import { Request, Response } from 'express';

const getUser = async (req: Request, res: Response) => {
	res.json({ msg: req.params.id });
};
const getUsers = async (req: Request, res: Response) => {
	res.json({ msg: [] });
};
const createUser = async (req: Request, res: Response) => {};
const removeUser = async (req: Request, res: Response) => {};

export default {
	getUsers,
	getUser,
	createUser,
	removeUser,
};
