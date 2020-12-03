import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardsService } from '../../cards/cards.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  card: any;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardsService,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params.id);
    this.card = this.cardService.getById(id);
  }

}
