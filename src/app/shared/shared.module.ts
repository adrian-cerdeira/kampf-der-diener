import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    SearchBoxComponent
  ],
  declarations: [
    ToolbarComponent,
    FooterComponent,
    SearchBoxComponent
  ],
})
export class SharedModule { }
