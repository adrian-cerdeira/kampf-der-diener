import { Injectable } from '@angular/core';
import { Card } from '../cards/card';
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


  constructor() {
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

  getStartingCards() {
    this.drawRandomStartingCards(this.playerA);
    this.drawRandomStartingCards(this.playerB);
  }

  getScriptedStartingCards (pACards: number[], pBCards: number[] ) {
    pACards.forEach(element => {
      this.drawCard(this.playerA, element);
    });
    pBCards.forEach(element => {
      this.drawCard(this.playerB, element);
    });
  }

  private createPlayer(): Player {
    return new Player(this.startingHitpoints, this);
  }

  public drawRandomStartingCards(player: Player): void{
    for( let cardnum = 0; cardnum <= 4; cardnum++){
      let cardId = this.generateRandomCardId();
      this.drawCard(player, cardId);
    }
  }

  public drawCard(player: Player, cardId: number): void{
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

  public placeCard(player: Player, cardID: number){
    
  }

  public cardAttacksPlayer(attacker: Card, player: Player){

  }

  public searchCard(cardArray: Card[], id: number): number{
    return this.moves.searchCard(cardArray, id);
  }


  getPlayerA(): Player { return this.playerA; }
  setPlayerA(playerA: Player): void { this.playerA = playerA; }

  getPlayerB(): Player { return this.playerB; }
  setPlayerB(playerB: Player): void { this.playerB = playerB; }

}
