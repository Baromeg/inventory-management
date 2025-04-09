import { Test, TestingModule } from '@nestjs/testing';
import { StockAdjustmentsResolver } from './stock-adjustments.resolver';

describe('StockAdjustmentsResolver', () => {
  let resolver: StockAdjustmentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockAdjustmentsResolver],
    }).compile();

    resolver = module.get<StockAdjustmentsResolver>(StockAdjustmentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
