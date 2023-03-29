import { Sequelize } from 'sequelize-typescript';
import { User } from './user.model';
import { Product } from './product.model';

export default new Sequelize({
	database: 'Ecommerce',
	dialect: 'mysql',
	username: 'root',
	password: '12345678',
	models: [User, Product],
});
