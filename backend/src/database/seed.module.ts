import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from 'src/products/product.model';
import { StockAdjustment } from 'src/stock-adjustments/stock-adjustment.model';
import { User } from 'src/users/user.model';
import { Warehouse } from 'src/warehouses/warehouse.model';
import { SeedService } from './seed.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Product, Warehouse, User, StockAdjustment]),
  ],
  providers: [SeedService],
  exports: [],
})
export class SeedModule {}
