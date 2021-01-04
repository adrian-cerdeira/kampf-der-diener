import { Injectable } from '@angular/core';
import { GameStatus } from './game-status';

import { Player } from './player';

@Injectable({
  providedIn: 'root',
})

export class Game {
  public readonly MAX_CRYSTALYS = 10;
  public readonly AMMOUNT_OF_CARDS = 89;
  public readonly BANNED_CARDS = [1, 12, 14];

  private startingHitpoints = 15;
  private playerA: Player;
  private playerB: Player;
  private status: GameStatus;


  constructor(startingHitpoints: number) {
    this.startingHitpoints = startingHitpoints;
    this.playerA = this.createPlayer();
    this.playerB = this.createPlayer();
    this.status = GameStatus.Started;
  }

  public getRandomInt(max: number): number{
    return (Math.floor(Math.random() * Math.floor(max))) + 1;
  }

  createGame(): any {
    return {
      // playerA: this.playerA,
      // playerB: this.playerB,
      // status: this.status,
    };
  }

  getCards(playerACard: any, playerBCard: any): any {
    // return this.moveService.whoWins(playerACard, playerBCard);
  }

  private createPlayer(): Player {
    return new Player(this.startingHitpoints, this);
  }

  public drawRandomStartingCards(): void{
  }

  public generateRandomCardId(): number{
    let randnum = 1;
    randnum = this.getRandomInt(this.AMMOUNT_OF_CARDS);
    if (this.BANNED_CARDS.includes(randnum)) {
      randnum = this.generateRandomCardId()
    }
    return randnum;
  }
}
