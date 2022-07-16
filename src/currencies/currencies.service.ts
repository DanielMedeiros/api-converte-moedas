import {
  BadRequestException,
  Injectable,  
} from '@nestjs/common';

export class Currencies {
  currency: string;
  value: number;
}

export class CurrencieRepository {
  async getCurrency(currency: string): Promise<Currencies> {
    return new Currencies();
  }

  async createCurrency({ currency, value }): Promise<Currencies> {
    return new Currencies();
  }

  async updateCurrency({ currency, value }): Promise<Currencies> {
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
    if (value <= 0) {
      throw new BadRequestException('The value must be greater zero');
    }
    return await this.currencieRepository.createCurrency({ currency, value });
  }

  async updateCurrency({ currency, value }): Promise<Currencies> {
    if (value <= 0) {
      throw new BadRequestException('The value must be greater zero');
    }
    return await this.currencieRepository.updateCurrency({ currency, value });
  }
}
