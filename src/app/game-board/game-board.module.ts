import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CardModule } from '../card/card.module';

import { GameBoardComponent } from './game-board/game-board.component';
import { GameBoardDienersComponent } from './game-board-dieners/game-board-dieners.component';
import { GameBoardSpellsComponent } from './game-board-spells/game-board-spells.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
  ],
  declarations: [
    GameBoardComponent,
    GameBoardDienersComponent,
    GameBoardSpellsComponent,
  ],
  exports: [
    GameBoardComponent,
  ],
})
export class GameBoardModule { }
