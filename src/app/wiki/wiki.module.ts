import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CardModule } from '../card/card.module';
import { WikiDetailsModule } from './wiki-details/wiki-details.module';

import { WikiRoutingModule } from './wiki-routing.module';

import { WikiComponent } from './wiki/wiki.component';
import { WikiFilterComponent } from './wiki-filter/wiki-filter.component';
import { WikiListComponent } from './wiki-list/wiki-list.component';
import { WikiListItemComponent } from './wiki-list-item/wiki-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
    WikiDetailsModule,
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
