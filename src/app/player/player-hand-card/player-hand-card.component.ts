import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-hand-card',
  templateUrl: './player-hand-card.component.html',
  styleUrls: ['./player-hand-card.component.scss']
})
export class PlayerHandCardComponent implements OnInit {
  @Input() card: any;
  @Input() isSecondPlayer: boolean | undefined;
  @Output() played = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  play(): void {
    this.played.emit(this.card);
  }

}
