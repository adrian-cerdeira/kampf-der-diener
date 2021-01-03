import { Injectable } from '@angular/core';
import { GameStatus } from './game-status';

import { Player } from './player';

@Injectable({
  providedIn: 'root',
})

export class Game {
  // private playerA: Player;
  // private playerB: Player;
  // private status: GameStatus;

  constructor(
    // private moveService: MoveService,
  ) {
    // this.playerA = this.createPlayer();
    // this.playerB = this.createPlayer();
    // this.status = GameStatus.Started;
  }

  createGame(): any {
    return {
      // playerA: this.playerA,
      // playerB: this.playerB,
      // status: this.status,
    }
  }

  getCards(playerACard: any, playerBCard: any): any {
    // return this.moveService.whoWins(playerACard, playerBCard);
  }

  private createPlayer() {
    return new Player(15);
  }
}
