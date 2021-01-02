import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private hitpoints: number
  private maxHitpoints: number
  private crystals: number
  private turn: number

  constructor(hitpoints:number) {
    this.hitpoints = hitpoints;
    this.maxHitpoints = hitpoints;
    this.crystals = 0;
    this.turn = 0;
   }
   
   nextTurn(): number {
    this.crystals++;
    this.turn++;
    return this.crystals;
   }


}
