import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ToolbarComponent,
    FooterComponent
  ],
  declarations: [
    ToolbarComponent,
    FooterComponent
  ],
})
export class SharedModule { }
