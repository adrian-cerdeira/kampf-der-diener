import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardTypeComponent } from './card-type/card-type.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    CardTypeComponent,
  ],
  exports: [
    CardTypeComponent,
  ],
})
export class CardModule { }
