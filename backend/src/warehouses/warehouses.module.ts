import { Module } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { WarehousesResolver } from './warehouses.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Warehouse } from './warehouse.model';

@Module({
  imports: [SequelizeModule.forFeature([Warehouse])],
  providers: [WarehousesService, WarehousesResolver],
})
export class WarehousesModule {}
