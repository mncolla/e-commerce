import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getProduct = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const product = await prisma.product.findUnique({
			where: {
				id: parseInt(id),
			},
		});
		res.status(200).json({ data: product });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

const getProducts = async (req: Request, res: Response) => {
	try {
		const products = prisma.product.findMany();
		res.status(200).json({ data: products });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

const createProduct = async (req: Request, res: Response) => {
	const { name, description, price, userId } = req.body;
	try {
		const product = await prisma.product.create({
			data: { name, description, price, userId },
		});
		res.status(200).json({ data: product });
	} catch (error) {
		res.status(500).json({ data: error });
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
		res.status(200).json({ data: product });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

export default {
	getProducts,
	getProduct,
	createProduct,
	removeProduct,
};
