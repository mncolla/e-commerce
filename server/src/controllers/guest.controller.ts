import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deals = async (req: Request, res: Response) => {
	try {
		const deals = await prisma.product.findMany({
			take: 10,
			// TODO: order by timestamp
		});
		res.status(200).json({ status: 'success', data: deals });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

const latestProducts = async (req: Request, res: Response) => {
	try {
		const deals = await prisma.product.findMany({
			take: 10,
			// TODO: order by timestamp
		});
		res.status(200).json({ status: 'success', data: deals });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

const recommendations = async (req: Request, res: Response) => {
	try {
		const deals = await prisma.product.findMany({
			take: 10,
			// TODO: order by timestamp
		});
		res.status(200).json({ status: 'success', data: deals });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error });
	}
};

export default {
	deals,
	latestProducts,
	recommendations,
};
