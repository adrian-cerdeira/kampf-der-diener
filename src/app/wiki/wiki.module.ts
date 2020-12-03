import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { WikiRoutingModule } from './wiki-routing.module';
import { WikiComponent } from './wiki/wiki.component';
import { WikiListComponent } from './wiki-list/wiki-list.component';
import { WikiListItemComponent } from './wiki-list-item/wiki-list-item.component';


@NgModule({
  declarations: [
    WikiComponent,
    WikiListComponent,
    WikiListItemComponent
  ],
  imports: [
    CommonModule,
    WikiRoutingModule,
    SharedModule,
  ]
})
export class WikiModule { }
