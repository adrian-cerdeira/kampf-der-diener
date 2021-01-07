import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CardModule } from '../card/card.module';

import { PlayerComponent } from './player/player.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { PlayerHandCardsComponent } from './player-hand-cards/player-hand-cards.component';
import { PlayerHandCardComponent } from './player-hand-card/player-hand-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
  ],
  declarations: [
    PlayerComponent,
    PlayerStatsComponent,
    PlayerHandCardsComponent,
    PlayerHandCardComponent,
  ],
  exports: [
    PlayerComponent,
  ]
})
export class PlayerModule { }
