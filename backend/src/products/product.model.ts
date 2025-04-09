import {
  Field,
  GraphQLISODateTime,
  ID,
  Int,
  ObjectType,
} from '@nestjs/graphql';
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
export class Product extends Model {
  @Field(() => ID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  declare id: string;

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
  declare createdAt: Date;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare updatedAt: Date;
}
