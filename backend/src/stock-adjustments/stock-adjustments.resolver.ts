import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { StockAdjustmentsService } from './stock-adjustments.service';
import { StockAdjustment } from './stock-adjustment.model';
import { Product } from 'src/products/product.model';
import { Warehouse } from 'src/warehouses/warehouse.model';
import { User } from 'src/users/user.model';
import { CreateStockAdjustmentInput } from './dto/create-stock-adjustment.input';

@Resolver(() => StockAdjustment)
export class StockAdjustmentsResolver {
  constructor(private readonly service: StockAdjustmentsService) {}

  @Query(() => [StockAdjustment])
  async stockAdjustments(): Promise<StockAdjustment[]> {
    return this.service.findAll();
  }

  @Query(() => StockAdjustment)
  async stockAdjustment(@Args('id', { type: () => ID }) id: string) {
    return this.service.findById(id);
  }

  @Mutation(() => StockAdjustment)
  async createStockAdjustment(
    @Args('input') input: CreateStockAdjustmentInput,
  ): Promise<StockAdjustment> {
    return this.service.create(input);
  }

  @ResolveField(() => Product, { nullable: true })
  product(@Parent() adjustment: StockAdjustment): Promise<Product | null> {
    return adjustment.$get('product');
  }

  @ResolveField(() => Warehouse, { nullable: true })
  warehouse(@Parent() adjustment: StockAdjustment): Promise<Warehouse | null> {
    return adjustment.$get('warehouse');
  }

  @ResolveField(() => User, { nullable: true })
  user(@Parent() adjustment: StockAdjustment): Promise<User | null> {
    return adjustment.$get('user');
  }
}
