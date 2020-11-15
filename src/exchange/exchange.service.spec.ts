import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeService } from './exchange.service';

describe('ExchangeService', () => {
  let service: ExchangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExchangeService],
    }).compile();

    service = module.get<ExchangeService>(ExchangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


describe('Convertamout()', () => {  

  it('should be throw is called with invalid params', async () => {
    await expect(
      service.convertAmount({from:'', to: '', amout: 0}))
      .rejects.toThrow();
  });
  
});  
});
