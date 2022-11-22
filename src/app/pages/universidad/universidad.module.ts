import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversidadPageRoutingModule } from './universidad-routing.module';

import { UniversidadPage } from './universidad.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversidadPageRoutingModule,
    PipesModule,
  ],
  declarations: [UniversidadPage]
})
export class UniversidadPageModule {}
