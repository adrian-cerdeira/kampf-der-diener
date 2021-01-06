import { Injectable } from '@angular/core';
import { Card } from '../cards/card';
import { CardLocation } from '../cards/card-location';
import { GameStatus } from './game-status';
import { Move } from './move';

import { Player } from '../player/player';
import { IfStmt } from '@angular/compiler';
import { Effects } from './effects';

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
  private effects: Effects;

  constructor() {
    this.playerA = this.createPlayer();
    this.playerB = this.createPlayer();
    this.moves = new Move();
    this.status = GameStatus.Started;
    this.effects = new Effects();
  }

  public getRandomInt(max: number): number {
    return (Math.floor(Math.random() * Math.floor(max))) + 1;
  }

  getStartingCards() {
    this.drawRandomStartingCards(this.playerA);
    this.drawRandomStartingCards(this.playerB);
  }

  getScriptedStartingCards(pACards: number[], pBCards: number[]) {
    pACards.forEach(element => {
      this.drawCard(this.playerA, element);
    });

    pBCards.forEach(element => {
      this.drawCard(this.playerB, element);
    });
  }

  drawRandomStartingCards(player: Player): void {
    for (let cardnum = 0; cardnum <= 4; cardnum++) {
      let cardId = this.generateRandomCardId();
      this.drawCard(player, cardId);
    }
  }

  drawCard(player: Player, cardId: number): void {
    let card = this.moves.getCard(cardId, player);
    player.addHandCard(card);
    card.setLocation(CardLocation.inHand);
  }

  generateRandomCardId(): number {
    let randnum = 1;
    randnum = this.getRandomInt(this.AMMOUNT_OF_CARDS);
    if (this.BANNED_CARDS.includes(randnum)) {
      randnum = this.generateRandomCardId()
    }
    return randnum;
  }

  placeDiener(player: Player, cardID: number) {
    this.moves.placeCard(player.getHandCards(), player.getDienerSlots(), cardID);
  }

  placeSpell(player: Player, cardID: number) {
    this.moves.placeCard(player.getHandCards(), player.getSpellSlots(), cardID);
  }

  cardAttacksPlayer(attacker: Card, player: Player) {
    this.moves.attackOnPlayer(attacker, player);
    if(player.getHitpoints() <= 0){
      this.otherPlayerWins(player)
    }
  }

  cardAttacksCard(attacker: Card, defender: Card) {
    this.moves.battleBetweenCards(attacker, defender);

    if (attacker.getHitpoints() <= 0) {
      this.sendDienerToGrave(attacker);
    } else if (defender.getHitpoints() <= 0)  {
      this.sendDienerToGrave(defender);
    }
  }

  public sendDienerToGrave(card: Card){
    let player = card.getPlayer();
    let index = this.searchCard(player.getDienerSlots(), card.getId());
    this.moves.sendCardToGrave(player.getGraveyard(), player.getDienerSlots(), index);
  }

  public sendSpellToGrave(card: Card){
    let player = card.getPlayer();
    let index = this.searchCard(player.getSpellSlots(), card.getId());
    this.moves.sendCardToGrave(player.getGraveyard(), player.getSpellSlots(), index);
  }

  public searchCard(cardArray: Card[], id: number): number{
    return this.moves.searchCard(cardArray, id);
  }

  private createPlayer(): Player {
    return new Player(this.startingHitpoints, this);
  }

  playerWins(winningPlayer: Player){

  }

  otherPlayerWins(losingPlayer: Player){

  }

  getPlayerA(): Player { return this.playerA; }
  setPlayerA(playerA: Player): void { this.playerA = playerA; }

  getPlayerB(): Player { return this.playerB; }
  setPlayerB(playerB: Player): void { this.playerB = playerB; }

  getEffects(): Effects { return this.effects; }

}
