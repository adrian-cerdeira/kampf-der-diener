import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: any;
  @Output() drawedCard = new EventEmitter();
  @Output() playedCard = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  draw(): void {
    this.drawedCard.emit();
  }

  play(card: any): void {
    this.playedCard.emit(card);
  }

}
