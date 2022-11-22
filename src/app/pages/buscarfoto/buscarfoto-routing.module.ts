import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarfotoPage } from './buscarfoto.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarfotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarfotoPageRoutingModule {}
