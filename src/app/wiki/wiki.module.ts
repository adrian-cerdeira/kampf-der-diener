import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { WikiRoutingModule } from './wiki-routing.module';
import { WikiComponent } from './wiki/wiki.component';
import { WikiListComponent } from "./wiki-list/wiki-list.component";


@NgModule({
  declarations: [
    WikiComponent,
    WikiListComponent
  ],
  imports: [
    CommonModule,
    WikiRoutingModule,
    SharedModule,
  ]
})
export class WikiModule { }
