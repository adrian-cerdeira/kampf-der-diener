import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/game/game';
import cards from '../../cards/cards.json';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  game: any;
  isStarted = false;
  isPlayerAfterMid = true;

  constructor(
  ) { }

  ngOnInit(): void {
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

    this.game = new Game();
    const cardsPlayerA = [39, 66, 44, 14, 53];
    const cardsPlayerB = [5, 9, 49, 58, 1];
    this.game.getScriptedStartingCards(cardsPlayerA, cardsPlayerB);
  }

}
