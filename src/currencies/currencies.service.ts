import { Injectable, InternalServerErrorException } from '@nestjs/common';

export class Currencies {
  currency: string;
}

export class CurrencieRepository {
  async getCurrency(currency: string): Promise<Currencies> {
    return new Currencies();
  }

  async createCurrency({ currency, value }): Promise<Currencies> {
    return new Currencies();
  }
}

@Injectable()
export class CurrenciesService {
  constructor(private currencieRepository: CurrencieRepository) {}

  async getCurrency(currency: string): Promise<Currencies> {
    return await this.currencieRepository.getCurrency(currency);
  }

  async createCurrency({ currency, value }): Promise<Currencies> {
    return await this.currencieRepository.createCurrency({ currency, value });
  }
}
