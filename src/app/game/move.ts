import { Injectable } from '@angular/core';
import { Card } from '../cards/card';
import { Player } from './player';
import cards from '../cards/cards.json';

@Injectable({
  providedIn: 'root',
})

export class Move {

  constructor(
  ) { }

  getCard(id: number, player: Player): Card {
    const card = new Card(cards.find((c: any) => c.id === id), player)
    return card;
  }

  battleBetweenCards(attackingCard: Card, defendingCard: Card): any {
    defendingCard.setHitpoints(defendingCard.getHitpoints() - (attackingCard.getAttack() - defendingCard.getShield()));
    attackingCard.setHitpoints(attackingCard.getHitpoints() - (defendingCard.getAttack() - attackingCard.getShield()));

    return [attackingCard, defendingCard];
  }

  attackOnPlayer(attackingCard: Card, player: Player): void {
    player.takeDamage(attackingCard.getAttack());
  }


}
