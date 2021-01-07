import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { GameModule } from '../game/game.module';
import { PlayerModule } from '../player/player.module';

import { TutorialRoutingModule } from './tutorial-routing.module';

import { TutorialComponent } from './tutorial/tutorial.component';
import { TutorialStartGameComponent } from './tutorial-start-game/tutorial-start-game.component';
import { TutorialDialogsComponent } from './tutorial-dialogs/tutorial-dialogs.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GameModule,
    PlayerModule,
    TutorialRoutingModule,
  ],
  declarations: [
    TutorialComponent,
    TutorialStartGameComponent,
    TutorialDialogsComponent,
  ],
})
export class TutorialModule { }
