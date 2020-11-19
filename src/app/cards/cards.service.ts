import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cards;

  constructor() {
    this.cards = this.createAll();
  }

  getAll() {

  }

  getById() {

  }

  private createAll() {
    return [
      this.create({
      })
    ];
  }

  private create(template) {
    const newCard = {
      id: null,
      name: null,
      description: null,
      effects: null,
      attack: null,
      live: null,
      shield: null,
      crystal: null,
      type: null,
    };

    return {
      ...template,
      ...newCard
    };
  }

}
