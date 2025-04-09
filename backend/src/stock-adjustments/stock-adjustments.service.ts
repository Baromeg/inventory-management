import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StockAdjustment } from './stock-adjustment.model';
import { CreateStockAdjustmentInput } from './dto/create-stock-adjustment.input';

@Injectable()
export class StockAdjustmentsService {
  private readonly logger = new Logger(StockAdjustmentsService.name);

  constructor(
    @InjectModel(StockAdjustment)
    private stockAdjustmentModel: typeof StockAdjustment,
  ) {}

  async findAll(): Promise<StockAdjustment[]> {
    const results = await this.stockAdjustmentModel.findAll();

    return results;
  }

  async findById(id: string): Promise<StockAdjustment> {
    const adjustment = await this.stockAdjustmentModel.findByPk(id);
    if (!adjustment) {
      this.logger.warn(`Adjustment with id ${id} not found`);
      throw new Error(`Adjustment ${id} not found`);
    }
    return adjustment;
  }

  async create(input: CreateStockAdjustmentInput): Promise<StockAdjustment> {
    return this.stockAdjustmentModel.create(input);
  }
}
