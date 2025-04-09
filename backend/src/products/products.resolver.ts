import {
  Args,
  ID,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { CreateProductInput } from './dto/create-product.input';
import { StockAdjustment } from 'src/stock-adjustments/stock-adjustment.model';
import { StockAdjustmentsService } from 'src/stock-adjustments/stock-adjustments.service';
import { StockAdjustmentsByProductLoader } from 'src/stock-adjustments/loaders/stock-adjustment-by-product.loader';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    private readonly productService: ProductsService,
    private readonly stockAdjustmentsService: StockAdjustmentsService,
    private readonly loader: StockAdjustmentsByProductLoader,
  ) {}

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Query(() => Product)
  async product(@Args('id', { type: () => ID }) id: string): Promise<Product> {
    return this.productService.findById(id);
  }

  @ResolveField(() => [StockAdjustment], { nullable: 'itemsAndList' })
  async stockAdjustments(
    @Parent() product: Product,
  ): Promise<StockAdjustment[]> {
    return this.loader.batch.load(product.id);
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('input') input: CreateProductInput,
  ): Promise<Product> {
    return this.productService.create(input);
  }
}
