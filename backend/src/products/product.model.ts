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
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { StockAdjustment } from 'src/stock-adjustments/stock-adjustment.model';
import { StockLevel } from 'src/stock-levels/stock-level.model';

@ObjectType()
@Table({ timestamps: true })
export class Product extends Model<
  InferAttributes<Product>,
  InferCreationAttributes<Product, { omit: 'stockLevels' | 'stockAdjustments' }>
> {
  @Field(() => ID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  declare id: CreationOptional<string>;

  @Field()
  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @Field({ nullable: true })
  @Column({ type: DataType.TEXT, allowNull: true })
  declare description?: string;

  @Field(() => Int)
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  declare stock: number;

  @Field(() => [StockAdjustment], { nullable: 'itemsAndList' })
  @HasMany(() => StockAdjustment)
  declare stockAdjustments: StockAdjustment[];

  @Field(() => [StockLevel], { nullable: 'itemsAndList' })
  @HasMany(() => StockLevel)
  declare stockLevels: StockLevel[];

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare createdAt: CreationOptional<Date>;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare updatedAt: CreationOptional<Date>;
}
