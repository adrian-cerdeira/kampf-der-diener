import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CardTypeComponent } from './card-type/card-type.component';
import { CardImgUrlPipe } from './card-img-url.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    ToolbarComponent,
    FooterComponent,
    SearchBoxComponent,
    CardTypeComponent,
    CardImgUrlPipe,
  ],
  declarations: [
    ToolbarComponent,
    FooterComponent,
    SearchBoxComponent,
    CardTypeComponent,
    CardImgUrlPipe,
  ],
})
export class SharedModule { }
