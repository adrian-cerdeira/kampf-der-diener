import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardTypeComponent } from './card-type/card-type.component';
import { CardImgUrlPipe } from './card-img-url.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    CardTypeComponent,
    CardImgUrlPipe,
  ],
  exports: [
    CardTypeComponent,
    CardImgUrlPipe,
  ],
})
export class CardModule { }
