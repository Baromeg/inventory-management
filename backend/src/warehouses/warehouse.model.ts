import {
  Column,
  DataType,
  Table,
  Model,
  PrimaryKey,
  Default,
} from 'sequelize-typescript';
import { Field, ObjectType, ID } from '@nestjs/graphql';
import { GraphQLISODateTime } from '@nestjs/graphql';
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

@ObjectType()
@Table({ timestamps: true })
export class Warehouse extends Model<
  InferAttributes<Warehouse>,
  InferCreationAttributes<Warehouse>
> {
  @Field(() => ID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  declare id: CreationOptional<string>;

  @Field()
  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @Field()
  @Column({ type: DataType.STRING, allowNull: false })
  declare location: string;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare createdAt: CreationOptional<Date>;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare updatedAt: CreationOptional<Date>;
}
