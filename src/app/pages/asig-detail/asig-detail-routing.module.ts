import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsigDetailPage } from './asig-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AsigDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsigDetailPageRoutingModule {}
