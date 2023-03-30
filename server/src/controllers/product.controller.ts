import { Request, Response } from 'express';
import { Product } from '../models/product.model';

const getProduct = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const product = await Product.findByPk(id);
		res.status(200).json({ data: product });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

const getProducts = async (req: Request, res: Response) => {
	try {
		const products = Product.findAll();
		res.status(200).json({ data: products });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

const createProduct = async (req: Request, res: Response) => {
	const { name, description, price, userId } = req.body;
	try {
		const product = await Product.create({ name, description, price, userId });
		res.status(200).json({ data: product });
	} catch (error) {
		res.status(500).json({ data: error });
	}
};

const removeProduct = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const product = await Product.destroy({
			where: {
				id,
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
