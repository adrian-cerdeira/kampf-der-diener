import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-hand-cards',
  templateUrl: './player-hand-cards.component.html',
  styleUrls: ['./player-hand-cards.component.scss']
})
export class PlayerHandCardsComponent implements OnInit {
  @Input() player: any;
  @Input() showCards: boolean | undefined;
  @Output() played = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  play(card: any): void {
    this.played.emit(card);
  }

}
