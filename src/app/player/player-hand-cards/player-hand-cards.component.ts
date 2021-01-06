import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-hand-cards',
  templateUrl: './player-hand-cards.component.html',
  styleUrls: ['./player-hand-cards.component.scss']
})
export class PlayerHandCardsComponent implements OnInit {
  @Input() player: any;
  @Input() showCards: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
