import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectividadPageRoutingModule } from './selectividad-routing.module';

import { SelectividadPage } from './selectividad.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectividadPageRoutingModule,
    ChartsModule
  ],
  declarations: [SelectividadPage]
})
export class SelectividadPageModule {}
