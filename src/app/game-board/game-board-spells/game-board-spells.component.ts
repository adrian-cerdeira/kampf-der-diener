import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board-spells',
  templateUrl: './game-board-spells.component.html',
  styleUrls: ['./game-board-spells.component.scss']
})
export class GameBoardSpellsComponent implements OnInit {
  @Input() player: any;

  constructor() { }

  ngOnInit(): void {
  }

}
