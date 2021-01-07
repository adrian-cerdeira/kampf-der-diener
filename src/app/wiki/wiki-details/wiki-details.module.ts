import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CardModule } from '../../card/card.module';

import { WikiDetailsComponent } from './wiki-details.component';
import { WikiDetailsInfoComponent } from './wiki-details-info/wiki-details-info.component';
import { WikiDetailsTableComponent } from './wiki-details-table/wiki-details-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
  ],
  declarations: [
    WikiDetailsComponent,
    WikiDetailsInfoComponent,
    WikiDetailsTableComponent,
  ],
  exports: [
    WikiDetailsComponent,
  ]
})
export class WikiDetailsModule { }
