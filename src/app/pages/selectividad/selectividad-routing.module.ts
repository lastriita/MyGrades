import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectividadPage } from './selectividad.page';

const routes: Routes = [
  {
    path: '',
    component: SelectividadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectividadPageRoutingModule {}
