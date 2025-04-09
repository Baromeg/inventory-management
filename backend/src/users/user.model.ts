import {
  Column,
  DataType,
  Model,
  Table,
  PrimaryKey,
  Default,
  HasMany,
} from 'sequelize-typescript';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { GraphQLISODateTime } from '@nestjs/graphql';
import { StockAdjustment } from 'src/stock-adjustments/stock-adjustment.model';
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

@ObjectType()
@Table({ timestamps: true })
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User, { omit: 'stockAdjustments' }>
> {
  @Field(() => ID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  declare id: CreationOptional<string>;

  @Field()
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  declare email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare password: string; // not exposed to GraphQL

  @Field()
  @Column({ type: DataType.STRING, defaultValue: 'user' })
  declare role: string;

  @HasMany(() => StockAdjustment)
  declare stockAdjustments: StockAdjustment[];

  @Field(() => GraphQLISODateTime)
  @Column(DataType.DATE)
  declare createdAt: CreationOptional<Date>;

  @Field(() => GraphQLISODateTime)
  @Column(DataType.DATE)
  declare updatedAt: CreationOptional<Date>;
}
