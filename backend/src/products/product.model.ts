import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@ObjectType()
@Table
export class Product extends Model {
  @Field(() => ID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  declare id: string;

  @Field()
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Field({ nullable: true })
  @Column({ type: DataType.TEXT, allowNull: true })
  description?: string;

  @Field(() => Int)
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  stock: number;
}
