import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { GameBoardComponent } from './game-board/game-board.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    GameBoardComponent,
  ],
  exports: [
    GameBoardComponent,
  ],
})
export class GameModule { }
