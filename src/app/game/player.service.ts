import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Player {
  private hitpoints: number
  private maxHitpoints: number
  private crystals: number
  private turn: number

  constructor(hitpoints: number) {
    this.hitpoints = hitpoints;
    this.maxHitpoints = hitpoints;
    this.crystals = 0;
    this.turn = 0;
  }

  nextTurn(): number {
    if (this.crystals <= 9) {
      this.crystals++;
    }

    this.turn++;

    return this.crystals;
  }

  takeDamage(damage: number): number {
    return this.hitpoints - damage;
  }

  healHitpoints(healing: number): number {
    if (this.hitpoints > this.maxHitpoints) {
      return this.hitpoints = this.maxHitpoints;
    }

    return this.hitpoints + healing
  }
}
