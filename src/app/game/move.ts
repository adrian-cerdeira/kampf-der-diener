import { Injectable } from '@angular/core';
import { Card } from '../cards/card';
import { Player } from './player';
import cards from '../cards/cards.json';
import { CardDetailsComponent } from '../wiki/card-details/card-details.component';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

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

  searchCard(cardArray: Card[], id: number): number {
    for(let index = 0; index < cardArray.length; index++){
      if ( cardArray[index].getId() == id ) {
        return index;
      }

    }
    return -1;
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
