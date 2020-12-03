import { Component, OnInit } from '@angular/core';

import { CardsService } from '../../cards/cards.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  cards: any;
  filteredCards: any;

  constructor(
    private cardService: CardsService,
  ) { }

  ngOnInit(): void {
    this.cards = this.cardService.getBasicsAll();
    this.filteredCards = this.cardService.getBasicsAll();
  }

  searchChanges(searchTerm: any): void {
    this.filteredCards = this.cards
      .filter((c: { name: string; }) => c.name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1);
  }

}
