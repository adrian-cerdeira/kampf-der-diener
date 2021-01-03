import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Move {

  constructor(
  ) { }

  whoWins(playerACard: any, playerBCard: any): any {
    return [playerACard, playerBCard];
  }
}
