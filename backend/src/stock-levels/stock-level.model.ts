// src/stock-levels/stock-level.model.ts

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

@ObjectType()
@Table({ timestamps: true })
export class StockLevel extends Model<StockLevel> {
  @Field(() => ID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  declare id: string;

  @Field(() => Int)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare quantity: number;

  @Field(() => Product)
  @BelongsTo(() => Product)
  declare product: Product;

  @ForeignKey(() => Product)
  @Column({ type: DataType.UUID })
  declare productId: string;

  @Field(() => Warehouse)
  @BelongsTo(() => Warehouse)
  declare warehouse: Warehouse;

  @ForeignKey(() => Warehouse)
  @Column({ type: DataType.UUID })
  declare warehouseId: string;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare createdAt: Date;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare updatedAt: Date;
}
