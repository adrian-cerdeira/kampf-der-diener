import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CardDetailsModule } from './card-details/card-details.module';

import { WikiRoutingModule } from './wiki-routing.module';
import { WikiComponent } from './wiki/wiki.component';
import { WikiFilterComponent } from './wiki-filter/wiki-filter.component';
import { WikiListComponent } from './wiki-list/wiki-list.component';
import { WikiListItemComponent } from './wiki-list-item/wiki-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CardDetailsModule,
    WikiRoutingModule,
  ],
  declarations: [
    WikiComponent,
    WikiFilterComponent,
    WikiListComponent,
    WikiListItemComponent,
  ],
})
export class WikiModule { }
