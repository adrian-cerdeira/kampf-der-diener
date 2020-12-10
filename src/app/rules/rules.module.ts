import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RulesRoutingModule } from './rules-routing.module';

import { RulesComponent } from './rules/rules.component';
import { RulesInfoComponent } from './rules-info/rules-info.component';
import { RulesMenuComponent } from './rules-menu/rules-menu.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RulesRoutingModule,
  ],
  declarations: [
    RulesComponent,
    RulesInfoComponent,
    RulesMenuComponent,
  ],
})
export class RulesModule { }
