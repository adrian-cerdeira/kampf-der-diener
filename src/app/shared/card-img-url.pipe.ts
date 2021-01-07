import { Pipe, PipeTransform } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { CardsService } from '../cards/cards.service';

@Pipe({
  name: 'cardImgUrl',
})
export class CardImgUrlPipe implements PipeTransform {
  cardImgUrl: any;

  constructor(private cardService: CardsService) { }

  transform(cardId: any, args?: any): any {
    return this.cardService.getById(cardId).pipe(
      switchMap(card => this.cardService.getImg(card.img))
    )
  }

}
