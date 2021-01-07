import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { GameBoardComponent } from './game-board/game-board.component';
import { GameBoardSpellsComponent } from './game-board-spells/game-board-spells.component';
import { GameBoardDienersComponent } from './game-board-dieners/game-board-dieners.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    GameBoardComponent,
    GameBoardSpellsComponent,
    GameBoardDienersComponent,
  ],
  exports: [
    GameBoardComponent,
  ],
})
export class GameModule { }
