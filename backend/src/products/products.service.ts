import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductsService implements OnModuleInit {
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
    const products = await this.productModel.findAll();

    return products.map((product) => product.get());
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productModel.findByPk(id);

    if (!product) {
      throw new Error(`Product with ID ${id} not found`);
    }

    return product.get();
  }

  async create(input: CreateProductInput): Promise<Product> {
    const product = await this.productModel.create({
      name: input.name,
      description: input.description,
      stock: input.stock ?? 0,
    });

    return product.get();
  }
}
