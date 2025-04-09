import { Test, TestingModule } from '@nestjs/testing';
import { StockLevelsResolver } from './stock-levels.resolver';

describe('StockLevelsResolver', () => {
  let resolver: StockLevelsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockLevelsResolver],
    }).compile();

    resolver = module.get<StockLevelsResolver>(StockLevelsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
