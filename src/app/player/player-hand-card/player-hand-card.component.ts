import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-hand-card',
  templateUrl: './player-hand-card.component.html',
  styleUrls: ['./player-hand-card.component.scss']
})
export class PlayerHandCardComponent implements OnInit {
  @Input() card: any;

  constructor() { }

  ngOnInit(): void {
  }

}
