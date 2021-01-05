import { Component, OnInit } from '@angular/core';

import { Game } from '../../game/game';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  game: any;
  playerBot: any;
  player: any;
  isStarted = false;
  isPlayerAfterMid = true;

  constructor(
  ) { }

  ngOnInit(): void {
    const localStorageIsStarted = window.localStorage.getItem('isStarted') === 'true'
      ? true
      : false;
    this.isStarted = localStorageIsStarted;

    if (this.isStarted) {
      this.start();
    }
    // // Turn 1 Bot
    // this.game.drawCard(this.game.getPlayerB(), 13);

    // this.game.placeCard(this.game.getPlayerB(), 5);

    // // Turn 1 Player
    // this.game.drawCard(this.game.getPlayerA(), 59);

    // // Turn 2 Bot
    // this.game.drawCard(this.game.getPlayerB(), 45);
  }

  start(): void {
    this.isStarted = true;
    window.localStorage.setItem('isStarted', 'true');

    this.game = new Game();

    this.player = this.game.getPlayerA();
    this.player.name = 'Spieler 1';
    this.playerBot = this.game.getPlayerB();
    this.playerBot.name = 'Bot Hai';

    this.game.getScriptedStartingCards([39, 66, 44, 14, 53], [5, 9, 49, 58, 1]);
  }

}
