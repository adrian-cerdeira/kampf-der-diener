import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WikiComponent } from './wiki/wiki.component';
import { WikiDetailsComponent } from './wiki-details/wiki-details.component';

const routes: Routes = [
  {
    path: '',
    component: WikiComponent,
  },
  {
    path: ':id',
    component: WikiDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiRoutingModule { }
