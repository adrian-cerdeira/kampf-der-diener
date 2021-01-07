import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ShopRoutingModule } from './shop-routing.module';

import { ShopComponent } from './shop/shop.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
  ],
  declarations: [
    ShopComponent
  ],
})
export class ShopModule { }
