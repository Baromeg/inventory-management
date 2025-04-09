import {
  Field,
  GraphQLISODateTime,
  ID,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Product } from 'src/products/product.model';
import { User } from 'src/users/user.model';
import { Warehouse } from 'src/warehouses/warehouse.model';

@ObjectType()
@Table({ timestamps: true })
export class StockAdjustment extends Model<
  InferAttributes<StockAdjustment>,
  InferCreationAttributes<
    StockAdjustment,
    { omit: 'product' | 'warehouse' | 'user' }
  >
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
  @Column({ type: DataType.UUID, allowNull: false })
  declare warehouseId: string;

  @Field(() => User)
  @BelongsTo(() => User)
  declare user: User;

  @Field(() => ID)
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  declare userId: string;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare createdAt: CreationOptional<Date>;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare updatedAt: CreationOptional<Date>;
}
