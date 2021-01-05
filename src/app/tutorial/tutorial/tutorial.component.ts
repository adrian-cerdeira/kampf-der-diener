import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/game/game';
import cards from '../../cards/cards.json';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  private game: any;
  constructor(
  ) { }

  ngOnInit(): void {

  // Prep

    this.game = new Game();



    let cardsPlayerA = [39, 66, 44, 14, 53];
    let cardsPlayerB = [5, 9, 49, 58, 1];

    this.game.getScriptedStartingCards(cardsPlayerA, cardsPlayerB);



    



  }
}
