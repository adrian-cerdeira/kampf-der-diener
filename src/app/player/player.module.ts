import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerHandCardsComponent } from './player-hand-cards/player-hand-cards.component';
import { SharedModule } from '../shared/shared.module';
import { PlayerHandCardComponent } from './player-hand-card/player-hand-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    PlayerHandCardsComponent,
    PlayerHandCardComponent,
  ],
  exports: [
    PlayerHandCardsComponent,
  ]
})
export class PlayerModule { }
