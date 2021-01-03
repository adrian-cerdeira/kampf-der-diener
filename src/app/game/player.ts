import { Game } from "./game";

export class Player {
  private service: Game;
  private hitpoints: number;
  private maxHitpoints: number;
  private crystals: number;
  private turn: number;
  private handCards = [];
  private dienerSlots = new Array(5);
  private spellSlots = new Array(1);
  private partnerSlots = new Array(2);
  private graveyard = [];

  constructor(hitpoints: number, service: Game) {
    this.service = service;
    this.hitpoints = hitpoints;
    this.maxHitpoints = hitpoints;
    this.crystals = 0;
    this.turn = 0;
  }

  nextTurn(): number {
    if (this.crystals < this.service.MAX_CRYSTALYS) {
      this.crystals++;
    }

    this.turn++;

    return this.crystals;
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

  getHitpoints(): number { return this.hitpoints };
  setHitpoints(hitpoints: number): void { this.hitpoints = hitpoints };

  getMaxHitpoints(): number { return this.maxHitpoints };
  setMaxHitpoints(maxHitpoints: number): void { this.maxHitpoints = maxHitpoints };

  getCrystals(): number { return this.crystals };
  setCrystals(crystals: number): void { this.crystals = crystals };

  getTurn(): number { return this.turn };
  setTurn(turn: number): void { this.turn = turn };

  getHandCards(): any { return this.handCards };
  setHandCards(handCards: any): void { this.handCards = handCards };

  getDienerSlots(): any { return this.dienerSlots };
  setDienerSlots(dienerSlots: any): void { this.dienerSlots = dienerSlots };

  getSpellSlots(): any { return this.spellSlots };
  setSpellSlots(spellSlots: any): void { this.spellSlots = spellSlots };

  getPartnerSlots(): any { return this.partnerSlots };
  setPartnerSlots(partnerSlots: any): void { this.partnerSlots = partnerSlots };

  getGraveyard(): any { return this.graveyard };
  setGraveyard(graveyard: any): void { this.graveyard = graveyard };

}
