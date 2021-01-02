import { Component, OnInit } from '@angular/core';

import { GameService } from '../../game/game.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  constructor(
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
    // this.gameService
  }

}
