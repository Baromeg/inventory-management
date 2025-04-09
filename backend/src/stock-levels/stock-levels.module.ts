import { Module } from '@nestjs/common';
import { StockLevelsService } from './stock-levels.service';
import { StockLevelsResolver } from './stock-levels.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { StockLevel } from './stock-level.model';
import { Product } from 'src/products/product.model';
import { Warehouse } from 'src/warehouses/warehouse.model';

@Module({
  imports: [SequelizeModule.forFeature([StockLevel, Product, Warehouse])],
  providers: [StockLevelsService, StockLevelsResolver],
})
export class StockLevelsModule {}
