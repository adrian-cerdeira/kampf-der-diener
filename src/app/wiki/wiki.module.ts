import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { WikiRoutingModule } from './wiki-routing.module';
import { WikiComponent } from './wiki/wiki.component';
import { WikiListComponent } from './wiki-list/wiki-list.component';
import { WikiListItemComponent } from './wiki-list-item/wiki-list-item.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardDetailsTableComponent } from './card-details-table/card-details-table.component';
import { CardDetailsInfoComponent } from './card-details-info/card-details-info.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WikiRoutingModule,
  ],
  declarations: [
    WikiComponent,
    WikiListComponent,
    WikiListItemComponent,
    CardDetailsComponent,
    CardDetailsInfoComponent,
    CardDetailsTableComponent,
  ],
})
export class WikiModule { }
