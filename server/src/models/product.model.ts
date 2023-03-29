import {
	Table,
	Column,
	Model,
	BelongsTo,
	ForeignKey,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class Product extends Model {
	@Column
	name: string;

	@Column
	description: string;

	@Column
	price: string;

	@ForeignKey(() => User)
	@Column
	userId: number;

	@BelongsTo(() => User, { as: 'user' })
	user: User;
}
