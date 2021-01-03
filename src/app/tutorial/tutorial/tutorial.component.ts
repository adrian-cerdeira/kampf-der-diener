import { Component, OnInit } from '@angular/core';
import cards from '../../cards/cards.json';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
    // const playerACard = cards.find(c => c.id === 1);
    // const playerBCard = cards.find(c => c.id === 2);

    // console.log(this.gameService.getCards(playerACard, playerBCard));
  }

}
