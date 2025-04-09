import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  Default,
} from 'sequelize-typescript';
import { Field, ObjectType, ID, Int } from '@nestjs/graphql';
import { Product } from '../products/product.model';
import { Warehouse } from '../warehouses/warehouse.model';
import { GraphQLISODateTime } from '@nestjs/graphql';
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

@ObjectType()
@Table({ timestamps: true })
export class StockLevel extends Model<
  InferAttributes<StockLevel>,
  InferCreationAttributes<StockLevel, { omit: 'product' | 'warehouse' }>
> {
  @Field(() => ID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  declare id: CreationOptional<string>;

  @Field(() => Int)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare quantity: number;

  @Field(() => Product)
  @BelongsTo(() => Product)
  declare product: Product;

  @Field(() => ID)
  @ForeignKey(() => Product)
  @Column({ type: DataType.UUID, allowNull: false })
  declare productId: string;

  @Field(() => Warehouse)
  @BelongsTo(() => Warehouse)
  declare warehouse: Warehouse;

  @Field(() => ID)
  @ForeignKey(() => Warehouse)
  @Column({ type: DataType.UUID })
  declare warehouseId: string;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare createdAt: CreationOptional<Date>;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare updatedAt: CreationOptional<Date>;
}
