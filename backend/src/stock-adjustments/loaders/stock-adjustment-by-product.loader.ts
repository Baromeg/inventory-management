import * as DataLoader from 'dataloader';
import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StockAdjustment } from '../stock-adjustment.model';

@Injectable({ scope: Scope.REQUEST })
export class StockAdjustmentsByProductLoader {
  constructor(
    @InjectModel(StockAdjustment)
    private readonly stockAdjustmentModel: typeof StockAdjustment,
  ) {}

  public readonly batch = new DataLoader<string, StockAdjustment[]>(
    async (productIds) => {
      const adjustments = await this.stockAdjustmentModel.findAll({
        where: {
          productId: productIds,
        },
      });

      const grouped = productIds.map((productId) =>
        adjustments.filter((adj) => adj.productId === productId),
      );

      return grouped;
    },
  );
}
