import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PlayerComponent } from './player/player.component';
import { PlayerHandCardsComponent } from './player-hand-cards/player-hand-cards.component';
import { PlayerHandCardComponent } from './player-hand-card/player-hand-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    PlayerComponent,
    PlayerHandCardsComponent,
    PlayerHandCardComponent,
  ],
  exports: [
    PlayerComponent,
  ]
})
export class PlayerModule { }
