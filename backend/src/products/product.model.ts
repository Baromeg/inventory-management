import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  description?: string;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  stock: number;
}
