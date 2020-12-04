import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardsService } from '../../cards/cards.service';
import { UpdateService } from '../../shared/update.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  card: any;
  previousCard: any;
  nextCard: any;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardsService,
    private updateService: UpdateService,
  ) {
    this.updateService.checkUpdate();
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params.id);
    const previousId = Number(this.route.snapshot.params.id) - 1;
    const nextId = Number(this.route.snapshot.params.id) + 1;

    this.cardService.getById(id).subscribe(card => {
      this.card = card;
    });

    this.cardService.getById(previousId).subscribe(previousCard => {
      this.previousCard = previousCard;
    });

    this.cardService.getById(nextId).subscribe(nextCard => {
      this.nextCard = nextCard;
    });
  }

}
