export class Player {
  private readonly MAX_CRYSTALYS = 10;
  private hitpoints: number;
  private maxHitpoints: number;
  private crystals: number;
  private turn: number;
  private handCards = [];
  private dienerSlots = new Array(5);
  private spellSlots = new Array(1);
  private partnerSlots = new Array(2);
  private graveyard = [];

  constructor(hitpoints: number) {
    this.hitpoints = hitpoints;
    this.maxHitpoints = hitpoints;
    this.crystals = 0;
    this.turn = 0;
  }

  nextTurn(): number {
    if (this.crystals < this.MAX_CRYSTALYS) {
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


}
