import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WikiComponent } from './wiki/wiki.component';
import { CardDetailsComponent } from './card-details/card-details.component';

const routes: Routes = [
  {
    path: '',
    component: WikiComponent,
  },
  {
    path: ':id',
    component: CardDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiRoutingModule { }
