import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasCortePageRoutingModule } from './notas-corte-routing.module';

import { NotasCortePage } from './notas-corte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasCortePageRoutingModule
  ],
  declarations: [NotasCortePage]
})
export class NotasCortePageModule {}
