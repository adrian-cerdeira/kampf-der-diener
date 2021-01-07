import { Injectable } from '@angular/core';

import { Card } from '../card/card';
import { CardLocation } from '../card/card-location';
import { GameStatus } from './game-status';
import { Move } from './move';

import { Player } from '../player/player';
import { Effects } from './effects';

@Injectable({
  providedIn: 'root',
})

export class Game {
  public readonly MAX_CRYSTALYS = 10;
  public readonly AMMOUNT_OF_CARDS = 89;
  public readonly BANNED_CARDS = [77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

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

  public newTurn(player: Player): void {
    player.nextTurn();
  }

  getStartingCards(): void {
    this.drawRandomStartingCards(this.playerA);
    this.drawRandomStartingCards(this.playerB);
  }

  getScriptedStartingCards(pACards: number[], pBCards: number[]): void {
    pACards.forEach(element => {
      this.drawCard(this.playerA, element);
    });

    pBCards.forEach(element => {
      this.drawCard(this.playerB, element);
    });
  }

  drawRandomStartingCards(player: Player): void {
    for (let cardnum = 0; cardnum <= 4; cardnum++) {
      const cardId = this.generateRandomCardId();
      this.drawCard(player, cardId);
    }
  }

  drawCard(player: Player, cardId: number): void {
    const card = this.moves.getCard(cardId, player);
    player.addHandCard(card);
    card.setLocation(CardLocation.inHand);
  }

  generateRandomCardId(): number {
    let randnum = 1;
    randnum = this.getRandomInt(this.AMMOUNT_OF_CARDS);
    if (this.BANNED_CARDS.includes(randnum)) {
      randnum = this.generateRandomCardId();
    }
    return randnum;
  }

  placeDiener(player: Player, cardID: number): void {
    if (this.cardCostValidation(player, player.getHandCards(), cardID)) {
      this.moves.placeCard(player.getHandCards(), player.getDienerSlots(), cardID);
    }

  }

  placeSpell(player: Player, cardID: number): void {
    if (this.cardCostValidation(player, player.getHandCards(), cardID)) {
      this.moves.placeCard(player.getHandCards(), player.getSpellSlots(), cardID);
    }
  }

  cardCostValidation(player: Player, handCards: Card[], cardID: number): boolean {
    const card = handCards[cardID];
    if (card.getCost() <= player.getCurrentCrystals()) {
      player.setCurrentCrystals(player.getCurrentCrystals() - card.getCost());
      return true;
    }
    return false;
  }

  cardAttacksPlayer(attacker: Card, player: Player): void {
    this.moves.attackOnPlayer(attacker, player);
    if (player.getHitpoints() <= 0) {
      this.playerWins();
    }
  }

  cardAttacksCard(attacker: Card, defender: Card): void {
    this.moves.battleBetweenCards(attacker, defender);

    if (attacker.getHitpoints() <= 0) {
      this.sendDienerToGrave(attacker);
    } else if (defender.getHitpoints() <= 0) {
      this.sendDienerToGrave(defender);
    }
  }

  public sendDienerToGrave(card: Card): void {
    const player = card.getPlayer();
    const index = this.searchCard(player.getDienerSlots(), card.getId());
    this.moves.sendCardToGrave(player.getGraveyard(), player.getDienerSlots(), index);
  }

  public sendHandcardToGrave(card: Card): void {
    const player = card.getPlayer();
    const index = this.searchCard(player.getHandCards(), card.getId());
    this.moves.sendCardToGrave(player.getGraveyard(), player.getHandCards(), index);
  }

  public sendSpellToGrave(card: Card): void {
    const player = card.getPlayer();
    const index = this.searchCard(player.getSpellSlots(), card.getId());
    this.moves.sendCardToGrave(player.getGraveyard(), player.getSpellSlots(), index);
  }

  public searchCard(cardArray: Card[], id: number): number {
    return this.moves.searchCard(cardArray, id);
  }

  private createPlayer(): Player {
    return new Player(this.startingHitpoints, this);
  }

  playerWins(): void {
    if (this.playerA.getHitpoints() <= 0) {
      this.status = GameStatus.PlayerBWon;
    } else if (this.playerB.getHitpoints() <= 0) {
      this.status = GameStatus.PlayerAWon;
    }
  }

  getPlayerA(): Player { return this.playerA; }
  setPlayerA(playerA: Player): void { this.playerA = playerA; }

  getPlayerB(): Player { return this.playerB; }
  setPlayerB(playerB: Player): void { this.playerB = playerB; }

  getStatus(): GameStatus { return this.status; }
  setStatus(status: GameStatus): void { this.status = status; }

  getEffects(): Effects { return this.effects; }

}
