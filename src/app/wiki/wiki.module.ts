import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { WikiRoutingModule } from './wiki-routing.module';
import { WikiComponent } from './wiki/wiki.component';


@NgModule({
  declarations: [
    WikiComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WikiRoutingModule
  ]
})
export class WikiModule { }
