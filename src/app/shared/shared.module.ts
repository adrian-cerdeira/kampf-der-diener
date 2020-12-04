import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CardTypeComponent } from './card-type/card-type.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ToolbarComponent,
    FooterComponent,
    SearchBoxComponent,
    CardTypeComponent,
  ],
  declarations: [
    ToolbarComponent,
    FooterComponent,
    SearchBoxComponent,
    CardTypeComponent,
  ],
})
export class SharedModule { }
