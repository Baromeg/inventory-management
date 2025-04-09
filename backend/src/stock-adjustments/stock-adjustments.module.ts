import { Module } from '@nestjs/common';
import { StockAdjustmentsService } from './stock-adjustments.service';
import { StockAdjustmentsResolver } from './stock-adjustments.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { StockAdjustment } from './stock-adjustment.model';
import { Product } from 'src/products/product.model';

@Module({
  imports: [SequelizeModule.forFeature([StockAdjustment, Product])],
  providers: [StockAdjustmentsService, StockAdjustmentsResolver],
})
export class StockAdjustmentsModule {}
