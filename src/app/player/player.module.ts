import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerHandCardsComponent } from './player-hand-cards/player-hand-cards.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    PlayerHandCardsComponent,
  ],
  exports: [
    PlayerHandCardsComponent,
  ]
})
export class PlayerModule { }
