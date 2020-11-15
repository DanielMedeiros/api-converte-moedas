import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeService } from './exchange.service';
import { BadRequestException } from '@nestjs/common';

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
      service.convertAmount({from:'', to: '', amount: 0}))
      .rejects.toThrow(new BadRequestException());
  });

  it('should be not throw is called with valid params', async () => {
    await expect(
      service.convertAmount({from:'USA', to: 'BRL', amount: 1}))
      .resolves.not.toThrow();
  });
  
});  
});
