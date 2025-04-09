import { Module } from '@nestjs/common';
import { StockAdjustmentsService } from './stock-adjustments.service';
import { StockAdjustmentsResolver } from './stock-adjustments.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { StockAdjustment } from './stock-adjustment.model';
import { Product } from 'src/products/product.model';
import { Warehouse } from 'src/warehouses/warehouse.model';
import { User } from 'src/users/user.model';
import { StockAdjustmentsByProductLoader } from './loaders/stock-adjustment-by-product.loader';

@Module({
  imports: [
    SequelizeModule.forFeature([StockAdjustment, Product, Warehouse, User]),
  ],
  providers: [
    StockAdjustmentsService,
    StockAdjustmentsResolver,
    StockAdjustmentsByProductLoader,
  ],
  exports: [StockAdjustmentsByProductLoader],
})
export class StockAdjustmentsModule {}
