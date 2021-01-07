import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CardModule } from '../../card/card.module';

import { CardDetailsComponent } from './card-details.component';
import { CardDetailsInfoComponent } from './card-details-info/card-details-info.component';
import { CardDetailsTableComponent } from './card-details-table/card-details-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
  ],
  declarations: [
    CardDetailsComponent,
    CardDetailsInfoComponent,
    CardDetailsTableComponent,
  ],
  exports: [
    CardDetailsComponent,
  ]
})
export class CardDetailsModule { }
