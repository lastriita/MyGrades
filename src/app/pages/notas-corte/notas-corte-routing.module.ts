import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasCortePage } from './notas-corte.page';

const routes: Routes = [
  {
    path: '',
    component: NotasCortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasCortePageRoutingModule {}
