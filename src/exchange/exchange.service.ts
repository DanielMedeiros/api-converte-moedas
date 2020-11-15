import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeService {
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   async  convertAmount({from,to,amout}):Promise<any>{
      throw new Error;
    }
}
