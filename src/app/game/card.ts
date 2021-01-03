export class Card {
  private id: number;
  private cost: number;
  private currentCost: number | undefined;
  private attack: number;
  private shield: number;
  private hitpoints: number;
  private maxHitpoints: number;
  private type: number;

  constructor(card: any) {
    this.id = card.id;
    this.cost = card.crystal;
    this.attack = card.attack;
    this.shield = card.shield;
    this.hitpoints = card.life;
    this.maxHitpoints = card.life;
    this.type = card.type;
  }

  getId(): number { return this.id };

  getCost(): number | undefined { return this.currentCost };
  getNormalCost(): number { return this.cost };
  setCost(cost: number): void { this.currentCost = cost };

  getAttack(): number { return this.attack };
  setAttack(attack: number): void { this.attack = attack };

  getShield(): number { return this.shield };
  setShield(shield: number): void { this.shield = shield };

  getType(): number { return this.type };
  setType(type: number): void { this.type = type };

  getHitpoints(): number { return this.hitpoints };
  setHitpoints(hitpoints: number): void { this.hitpoints = hitpoints };

  getMaxHitpoints(): number { return this.hitpoints };
  setMaxHitpoints(hitpoints: number): void { this.maxHitpoints = hitpoints };

}
