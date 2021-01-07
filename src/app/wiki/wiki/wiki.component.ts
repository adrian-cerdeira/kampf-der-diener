import { Component, OnInit } from '@angular/core';

import { CardsService } from '../../cards/cards.service';
import { UpdateService } from '../../shared/update.service';

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
    private updateService: UpdateService,
  ) {
    this.updateService.checkUpdate();
  }

  ngOnInit(): void {
    this.cardService.getBasicsAll().subscribe(cards => {
      this.cards = cards;
      this.filteredCards = cards;
    });
  }

  searchChanges(searchTerm: any): void {
    this.filteredCards = this.cards
      .filter((c: any) => c.name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1);
  }

  filterChanges(event: any): void {
    const { selectOption, searchValue } = event;

    this.filteredCards = this.cards
      .filter((c: any) => c[selectOption] >= searchValue);
  }

}
