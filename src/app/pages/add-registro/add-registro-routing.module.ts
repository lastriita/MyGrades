import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRegistroPage } from './add-registro.page';

const routes: Routes = [
  {
    path: '',
    component: AddRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRegistroPageRoutingModule {}
