import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

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
}
