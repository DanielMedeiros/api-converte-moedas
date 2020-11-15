import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ExchangeService {
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   async  convertAmount({from,to,amount}):Promise<any>{
      if (!from || !to || !amount) {
         throw new BadRequestException;   
      }
      
    }
}
