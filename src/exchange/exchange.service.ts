import { BadRequestException, Injectable } from '@nestjs/common';
import { CurrenciesService } from '../currencies/currencies.service';
import { ExchangeInputsType } from './types/exchange-input.type';
import { ExchangeType } from './types/exchange.type';

@Injectable()
export class ExchangeService {
  constructor(private currenciesService: CurrenciesService) {}

  async convertAmount({
    from,
    to,
    amount,
  }: ExchangeInputsType): Promise<ExchangeType> {
    if (!from || !to || !amount) {
      throw new BadRequestException();
    }

    try {
      const currencyFrom = await this.currenciesService.getCurrency(from);
      const currencyTo = await this.currenciesService.getCurrency(to);

      return {
        amount: (currencyFrom.currency / currencyTo.currency) * amount,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
