import { Card } from '../cards/card';
import { Game } from '../game/game';

export class Player {
  private service: Game;
  private hitpoints: number;
  private maxHitpoints: number;
  private crystals: number;
  private turn: number;
  private handCards: Card[] = new Array();
  // Workarround: Damit Slots nicht komsich aussehen
  // private dienerSlots: Card[] = new Array(5);
  private dienerSlots: Card[] = new Array();
  // private spellSlots: Card[] = new Array(1);
  private spellSlots: Card[] = new Array();
  // private partnerSlots: Card[] = new Array(2);
  private partnerSlots: Card[] = new Array(0);
  private graveyard: Card[] = new Array();

  constructor(hitpoints: number, service: Game) {
    this.service = service;
    this.hitpoints = hitpoints;
    this.maxHitpoints = hitpoints;
    this.crystals = 0;
    this.turn = 0;
  }

  nextTurn(): void {
    if (this.crystals < this.service.MAX_CRYSTALYS) {
      this.crystals++;
    }

    this.turn++;
  }

  takeDamage(damage: number): number {
    this.hitpoints = this.hitpoints - damage;
    return this.hitpoints;
  }

  healHitpoints(healing: number): number {
    this.hitpoints = this.hitpoints + healing;

    if (this.hitpoints > this.maxHitpoints) {
      return this.hitpoints = this.maxHitpoints;
    }

    return this.hitpoints;
  }

  addHandCard(newCard: Card): void {
    this.handCards.push(newCard);
  }

  getHitpoints(): number { return this.hitpoints; }
  setHitpoints(hitpoints: number): void { this.hitpoints = hitpoints; }

  getMaxHitpoints(): number { return this.maxHitpoints; }
  setMaxHitpoints(maxHitpoints: number): void { this.maxHitpoints = maxHitpoints; }

  getCrystals(): number { return this.crystals; }
  setCrystals(crystals: number): void { this.crystals = crystals; }

  getTurn(): number { return this.turn; }
  setTurn(turn: number): void { this.turn = turn; }

  getHandCards(): any { return this.handCards; }
  setHandCards(handCards: any): void { this.handCards = handCards; }

  getDienerSlots(): any { return this.dienerSlots; }
  setDienerSlots(dienerSlots: any): void { this.dienerSlots = dienerSlots; }

  getSpellSlots(): any { return this.spellSlots; }
  setSpellSlots(spellSlots: any): void { this.spellSlots = spellSlots; }

  getPartnerSlots(): any { return this.partnerSlots; }
  setPartnerSlots(partnerSlots: any): void { this.partnerSlots = partnerSlots; }

  getGraveyard(): any { return this.graveyard; }
  setGraveyard(graveyard: any): void { this.graveyard = graveyard; }

}
