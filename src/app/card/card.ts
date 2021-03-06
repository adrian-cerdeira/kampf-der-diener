import { CardLocation } from './card-location';
import { Player } from '../player/player';

export class Card {
  private id: number;
  private cost: number;
  private currentCost: number;
  private attack: number;
  private shield: number;
  private hitpoints: number;
  private maxHitpoints: number;
  private type: number;
  private player: Player;
  private location: CardLocation;

  constructor(card: any, player: Player) {
    this.id = card.id;
    this.cost = card.crystal;
    this.currentCost = card.crystal;
    this.attack = card.attack;
    this.shield = card.shield;
    this.hitpoints = card.life;
    this.maxHitpoints = card.life;
    this.type = card.type;
    this.player = player;
    this.location = CardLocation.undefined;
  }

  getId(): number { return this.id; }

  getCost(): number { return this.currentCost; }
  getNormalCost(): number { return this.cost; }
  setCost(cost: number): void { this.currentCost = cost; }

  getAttack(): number { return this.attack; }
  setAttack(attack: number): void { this.attack = attack; }

  getShield(): number { return this.shield; }
  setShield(shield: number): void { this.shield = shield; }

  getType(): number { return this.type; }
  setType(type: number): void { this.type = type; }

  getHitpoints(): number { return this.hitpoints; }
  setHitpoints(hitpoints: number): void { this.hitpoints = hitpoints; }

  getMaxHitpoints(): number { return this.maxHitpoints; }
  setMaxHitpoints(hitpoints: number): void { this.maxHitpoints = hitpoints; }

  getLocation(): CardLocation { return this.location; }
  setLocation(location: CardLocation): void { this.location = location; }

  getPlayer(): Player {return this.player; }
  setPlayer(player: Player): void { this.player = player; }

}
