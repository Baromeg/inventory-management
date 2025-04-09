// src/database/seed.service.ts

import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../products/product.model';
import { User } from '../users/user.model';
import { Warehouse } from '../warehouses/warehouse.model';
import { StockAdjustment } from '../stock-adjustments/stock-adjustment.model';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectModel(Product) private productModel: typeof Product,
    @InjectModel(Warehouse) private warehouseModel: typeof Warehouse,
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(StockAdjustment)
    private stockAdjustmentModel: typeof StockAdjustment,
  ) {}

  async onModuleInit() {
    const [product] = await this.productModel.findOrCreate({
      where: { name: 'Seeded Product' },
      defaults: {
        name: 'Seeded Product',
        description: 'Used in test mutations',
        stock: 50,
      },
    });

    const [warehouse] = await this.warehouseModel.findOrCreate({
      where: { name: 'Main Warehouse' },
      defaults: {
        name: 'Main Warehouse',
        location: 'HQ',
      },
    });

    const [user] = await this.userModel.findOrCreate({
      where: { email: 'admin@example.com' },
      defaults: {
        email: 'admin@example.com',
        password: 'securepassword', // Ideally hashed!
        role: 'admin',
      },
    });

    await this.stockAdjustmentModel.findOrCreate({
      where: {
        productId: product.id,
        warehouseId: warehouse.id,
        userId: user.id,
        quantity: 10,
      },
    });

    console.log('[Seed] Database populated with test data');
  }
}
