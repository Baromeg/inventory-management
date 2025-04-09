import { InputType, Field, ID, Int } from '@nestjs/graphql';

@InputType()
export class CreateStockAdjustmentInput {
  @Field(() => ID)
  productId: string;

  @Field(() => ID)
  warehouseId: string;

  @Field(() => ID)
  userId: string;

  @Field(() => Int)
  quantity: number;
}
