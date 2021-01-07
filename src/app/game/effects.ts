import { Injectable } from '@angular/core';
import { Card } from '../cards/card';

@Injectable({
  providedIn: 'root',
})

export class Effects {


  constructor(){}

  effectCard66(receiver: Card, donator: Card){
    receiver.setAttack(receiver.getAttack() + donator.getAttack());
    receiver.setHitpoints(receiver.getHitpoints() + donator.getHitpoints());
    receiver.setMaxHitpoints(receiver.getMaxHitpoints() + donator.getMaxHitpoints());
    receiver.setShield(receiver.getShield() + donator.getShield());
  }

}
