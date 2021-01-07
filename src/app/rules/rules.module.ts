import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RulesInfoModule } from './rules-info/rules-info.module';

import { RulesRoutingModule } from './rules-routing.module';

import { RulesComponent } from './rules/rules.component';
import { RulesMenuComponent } from './rules-menu/rules-menu.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RulesInfoModule,
    RulesRoutingModule,
  ],
  declarations: [
    RulesComponent,
    RulesMenuComponent,
  ],
})
export class RulesModule { }
