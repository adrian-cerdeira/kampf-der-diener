import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { RulesRoutingModule } from './rules-routing.module';

import { RulesComponent } from './rules/rules.component';
import { RulesInfoComponent } from './rules-info/rules-info.component';
import { RulesInfoGameplayComponent } from './rules-info-gameplay/rules-info-gameplay.component';
import { RulesInfoDefaultComponent } from './rules-info-default/rules-info-default.component';
import { RulesInfoGamemodesComponent } from './rules-info-gamemodes/rules-info-gamemodes.component';
import { RulesInfoGameComponent } from './rules-info-game/rules-info-game.component';
import { RulesInfoGeneralComponent } from './rules-info-general/rules-info-general.component';
import { RulesInfoAttackComponent } from './rules-info-attack/rules-info-attack.component';
import { RulesInfoPartnerComponent } from './rules-info-partner/rules-info-partner.component';
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
    RulesInfoGameplayComponent,
    RulesInfoDefaultComponent,
    RulesInfoGamemodesComponent,
    RulesInfoGameComponent,
    RulesInfoGeneralComponent,
    RulesInfoAttackComponent,
    RulesInfoPartnerComponent,
    RulesMenuComponent,
  ],
})
export class RulesModule { }
