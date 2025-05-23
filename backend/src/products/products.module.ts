import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { Warehouse } from 'src/warehouses/warehouse.model';
import { StockLevel } from 'src/stock-levels/stock-level.model';
import { StockAdjustment } from 'src/stock-adjustments/stock-adjustment.model';
import { StockAdjustmentsService } from 'src/stock-adjustments/stock-adjustments.service';
import { StockAdjustmentsByProductLoader } from 'src/stock-adjustments/loaders/stock-adjustment-by-product.loader';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Product,
      Warehouse,
      StockLevel,
      StockAdjustment,
    ]),
  ],
  providers: [
    ProductsService,
    ProductsResolver,
    StockAdjustmentsService,
    StockAdjustmentsByProductLoader,
  ],
})
export class ProductsModule {}
