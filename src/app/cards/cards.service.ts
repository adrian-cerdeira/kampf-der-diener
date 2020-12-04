import { Injectable } from '@angular/core';

import cards from './cards.json';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cards: any;

  constructor() {
    // Initialiserung des Karten Array mit alphabetischer Sortierung
    this.cards = cards
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((c, i) => {

        return {
          id: i + 1,
          name: c.name,
          img: c.img,
          description: c.description,
          effects: c.effects,
          attack: c.attack,
          life: c.life,
          shield: c.shield,
          crystal: c.crystal,
          type: c.type,
        };

      });
  }

  getAll(): void {
    return this.cards;
  }

  getBasicsAll(): void {
    return this.cards
      .map((c: { id: any; name: any; type: any; crystal: any; attack: any; life: any; shield: any; }) => {
        return {
          id: c.id,
          name: c.name,
          type: c.type,
          crystal: c.crystal,
          attack: c.attack,
          life: c.life,
          shield: c.shield,
        };
      });
  }

  getById(id: number): any {
    return this.cards.find((c: { id: number; }) => c.id === id);
  }

  getByName(name: string): any {
    return this.cards.find((c: { name: string; }) => c.name === name);
  }

}
