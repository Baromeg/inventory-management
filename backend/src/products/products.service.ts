import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductsService implements OnModuleInit {
  private readonly logger = new Logger(ProductsService.name);

  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async onModuleInit() {
    const count = await this.productModel.count();
    if (count === 0) {
      await this.productModel.create({
        name: 'Example Product',
        description: 'This is a seeded product',
        stock: 100,
      });
      console.log('Seeded initial product');
    }
  }

  async findAll(): Promise<Product[]> {
    this.logger.log('Fetching all products');

    const products = await this.productModel.findAll();

    return products.map((product) => product.get());
  }

  async findById(id: string): Promise<Product> {
    this.logger.log(`Fetching product with id: ${id}`);

    const product = await this.productModel.findByPk(id);

    if (!product) {
      this.logger.warn(`Product with id ${id} not found`);

      throw new Error(`Product with ID ${id} not found`);
    }

    return product.get();
  }

  async create(input: CreateProductInput): Promise<Product> {
    this.logger.log(`Creating product with name: ${input.name}`);

    const product = await this.productModel.create({
      name: input.name,
      description: input.description,
      stock: input.stock ?? 0,
    });

    return product.get();
  }
}
