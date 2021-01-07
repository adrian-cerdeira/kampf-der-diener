import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board-dieners',
  templateUrl: './game-board-dieners.component.html',
  styleUrls: ['./game-board-dieners.component.scss']
})
export class GameBoardDienersComponent implements OnInit {
  @Input() player: any;

  constructor() { }

  ngOnInit(): void {
  }

}
