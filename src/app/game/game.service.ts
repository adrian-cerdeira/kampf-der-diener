import { Injectable } from '@angular/core';

import { MoveService } from './move.service';

@Injectable({
  providedIn: 'root',
})

export class GameService {

  constructor(
    private moveService: MoveService,
  ) { }

  getCards(playerACard: any, playerBCard: any): any {
    return this.moveService.whoWins(playerACard, playerBCard);
  }
}
