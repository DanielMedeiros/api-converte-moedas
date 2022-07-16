import {
  BadRequestException,
  Injectable,  
} from '@nestjs/common';
import { Currencies } from './currencies.entity';
import { CurrencieRepository } from './currencies.repository';


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

  async deleteCurrency(currency: string): Promise<void> {
    return await this.currencieRepository.deleteCurrency(currency);
  }
}
