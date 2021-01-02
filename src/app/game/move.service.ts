import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MoveService {

  constructor(
  ) { }

  whoWins(playerACard: any, playerBCard: any): any {
    return [playerACard, playerBCard];
  }
}
