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

@ObjectType()
@Table({ timestamps: true })
export class Warehouse extends Model<Warehouse> {
  @Field(() => ID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  declare id: string;

  @Field()
  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @Field()
  @Column({ type: DataType.STRING, allowNull: false })
  declare location: string;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare createdAt: Date;

  @Field(() => GraphQLISODateTime)
  @Column({ type: DataType.DATE })
  declare updatedAt: Date;
}
