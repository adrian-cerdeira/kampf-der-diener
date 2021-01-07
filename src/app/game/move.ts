import { Injectable } from '@angular/core';

import { Card } from '../cards/card';
import { Player } from '../player/player';

import cards from '../cards/cards.json';

@Injectable({
  providedIn: 'root',
})

export class Move {

  constructor(
  ) { }

  getCard(id: number, player: Player): Card {
    const card = new Card(cards.find((c: any) => c.id === id), player);
    return card;
  }

  searchCard(cardArray: Card[], id: number): number {
    for (let index = 0; index < cardArray.length; index++) {
      if (cardArray[index].getId() === id) {
        return index;
      }
    }
    return -1;
  }

  battleBetweenCards(attackingCard: Card, defendingCard: Card): void {
    defendingCard.setHitpoints(defendingCard.getHitpoints() - (attackingCard.getAttack() - defendingCard.getShield()));
    attackingCard.setHitpoints(attackingCard.getHitpoints() - (defendingCard.getAttack() - attackingCard.getShield()));
  }

  attackOnPlayer(attackingCard: Card, player: Player): void {
    player.takeDamage(attackingCard.getAttack());
  }

  placeCard(handcards: Card[], field: Card[], arrayIndex: number): void {
    field.push(handcards[arrayIndex]);
    handcards.splice(arrayIndex, 1);
  }

  sendCardToGrave(graveyard: Card[], field: Card[], arrayIndex: number): void {
    graveyard.push(field[arrayIndex]);
    field.splice(arrayIndex, 1);
  }

}
