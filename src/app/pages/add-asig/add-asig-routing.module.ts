import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAsigPage } from './add-asig.page';

const routes: Routes = [
  {
    path: '',
    component: AddAsigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAsigPageRoutingModule {}
