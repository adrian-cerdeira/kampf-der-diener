import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: any;
  @Input() showCards: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
