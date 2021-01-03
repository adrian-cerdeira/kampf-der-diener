import { Injectable } from '@angular/core';
import { Card } from '../cards/card';
import { Player } from './player';

@Injectable({
  providedIn: 'root',
})

export class Move {

  constructor(
  ) { }

  battleBetweenCards(attackingCard: Card, defendingCard: Card): any {
    defendingCard.setHitpoints(defendingCard.getHitpoints() - (attackingCard.getAttack() - defendingCard.getShield()));
    attackingCard.setHitpoints(attackingCard.getHitpoints() - (defendingCard.getAttack() - attackingCard.getShield()));
    return [attackingCard, defendingCard];
  }

  attackOnPlayer(attackingCard: Card, player: Player): Player {
    player.takeDamage(attackingCard.getAttack());
    return player;
  }

}
