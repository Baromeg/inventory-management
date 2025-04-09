import {
  Field,
  GraphQLISODateTime,
  ID,
  Int,
  ObjectType,
} from '@nestjs/graphql';
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

@ObjectType()
@Table({ timestamps: true })
export class StockAdjustment extends Model<StockAdjustment> {
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
  @Column({ type: DataType.UUID, allowNull: false })
  declare productId: string;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare createdAt: Date;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare updatedAt: Date;
}
