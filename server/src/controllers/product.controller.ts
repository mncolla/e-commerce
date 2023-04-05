import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { decodeToken } from '../services/jwt.service';

const prisma = new PrismaClient();

const getProduct = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const product = await prisma.product.findUnique({
			where: {
				id: parseInt(id),
			},
		});
		res.status(200).json({ status: 'success', data: product });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

const getProducts = async (req: Request, res: Response) => {
	try {
		const products = prisma.product.findMany();
		res.status(200).json({ status: 'success', data: products });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

const createProduct = async (req: Request, res: Response) => {
	const { authorization } = req.headers;
	const { id: userId }: any = decodeToken(authorization!);
	const { name, description, price } = req.body;

	try {
		const product = await prisma.product.create({
			data: { name, description, price, userId },
		});
		res.status(200).json({ status: 'success', data: product });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

const removeProduct = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const product = await prisma.product.delete({
			where: {
				id: parseInt(id),
			},
		});
		res.status(200).json({ status: 'success', data: product });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

const updateProduct = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { name, description, price } = req.body;

	try {
		const product = await prisma.product.update({
			where: {
				id: parseInt(id),
			},
			data: {
				name,
				description,
				price,
			},
		});
		res.status(200).json({ status: 'success', data: product });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

export default {
	getProducts,
	getProduct,
	createProduct,
	removeProduct,
	updateProduct,
};
