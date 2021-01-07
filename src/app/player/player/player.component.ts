import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: any;
  @Input() showCards: boolean | undefined;
  @Output() drawedCard = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  draw() {
    this.drawedCard.emit();
  }

}
