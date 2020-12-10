import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TutorialRoutingModule } from './tutorial-routing.module';

import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TutorialRoutingModule
  ],
  declarations: [
    TutorialComponent
  ],
})
export class TutorialModule { }
