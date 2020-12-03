import { Component, OnInit } from '@angular/core';

import { CardsService } from '../../cards/cards.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  cards: any;

  constructor(
    private cardService: CardsService,
  ) { }

  ngOnInit(): void {
    this.cards = this.cardService.getAll();
  }

  searchChanges(event: any): void {
    console.log(event);
  }

}
