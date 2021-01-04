import { Injectable } from '@angular/core';
import { CardLocation } from '../cards/card-location';
import { GameStatus } from './game-status';
import { Move } from './move';

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
  private moves: Move;


  constructor(startingHitpoints: number) {
    this.startingHitpoints = startingHitpoints;
    this.playerA = this.createPlayer();
    this.playerB = this.createPlayer();
    this.moves = new Move();
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

  getStartingCards(playerA: Player, playerB: Player): any {
    this.drawRandomStartingCards(playerA);
    this.drawRandomStartingCards(playerB);
  }

  private createPlayer(): Player {
    return new Player(this.startingHitpoints, this);
  }

  public drawRandomStartingCards(player: Player): void{
    for( let cardnum = 0; cardnum <= 4; cardnum++){
      this.drawCard(player);
    }
  }

  public drawCard(player: Player): void{
    let cardId = this.generateRandomCardId();
    let card = this.moves.getCard(cardId, player);
    player.setHandCards(card);
    card.setLocation(CardLocation.inHand);
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
