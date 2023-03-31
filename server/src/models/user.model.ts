import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Product } from './product.model';

@Table
export class User extends Model {
	@Column
	username: string;

	@Column
	email: string;

	@Column
	password: string;

	@HasMany(() => Product, { as: 'products' })
	products: Product[];
}
