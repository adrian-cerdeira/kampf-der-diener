import { Component, OnInit } from '@angular/core';

import { Game } from '../../game/game';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  game: any;
  modal: any;
  playerBot: any;
  player: any;
  isStarted = false;
  isSecondPlayer = true;

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


    // let cardPos = this.game.searchCard(this.game.getPlayerB().getHandCards(), 5);

    // this.game.placeCard(this.game.getPlayerB, cardPos);


  }

  start(): void {
    this.isStarted = true;
    window.localStorage.setItem('isStarted', 'true');

    this.game = new Game();

    this.player = this.game.getPlayerA();
    this.player.name = 'Spieler 1';
    this.player.backgroundColor = '#FF0000';
    this.player.fontColor = '#FFFFFF';
    this.playerBot = this.game.getPlayerB();
    this.playerBot.backgroundColor = '#000000';
    this.playerBot.fontColor = '#FFFFFF';
    this.playerBot.name = 'Bot Hai';

    this.game.getScriptedStartingCards([39, 66, 44, 14, 53], [5, 9, 49, 58, 1]);
    this.modal = {
      title: 'Start Tutorial',
      content: `
      <h1 class="title">Willkommen zu Kampf der Diener</h1>
      <p class="has-text-left">
        In diesem Tutorial werden Sie das Spiel kennenlernen.
        <br />
        Schritt für Schritt werden Sie an das Spiel spielerisch herangeführt.
        <br />
        Falls technische Schwierigkeiten passieren, erstellen Sie bitte ein Ticket auf 
        <a href="https://github.com/adrian-cerdeira/kampf-der-diener/issues/new">
        <i class="fab fa-github"></i>
        Github - Kampf der Diener Issues
        </a>
        .
        <br />
        <br />
        Danke fürs Feedback und viel Spass.
      </p>
      `,
      index: 1,
      isActive: true,
    }
  }

}
