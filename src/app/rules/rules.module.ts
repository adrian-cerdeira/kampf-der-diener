import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRoutingModule } from './rules-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RulesComponent } from './rules/rules.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RulesRoutingModule,
  ],
  declarations: [
    RulesComponent,
  ],
})
export class RulesModule { }
