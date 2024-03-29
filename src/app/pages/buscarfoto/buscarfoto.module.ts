import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarfotoPageRoutingModule } from './buscarfoto-routing.module';

import { BuscarfotoPage } from './buscarfoto.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarfotoPageRoutingModule,
    PipesModule
  ],
  declarations: [BuscarfotoPage]
})
export class BuscarfotoPageModule {}
