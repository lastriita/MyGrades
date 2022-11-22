import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRegistroPageRoutingModule } from './add-registro-routing.module';

import { AddRegistroPage } from './add-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRegistroPageRoutingModule
  ],
  declarations: [AddRegistroPage]
})
export class AddRegistroPageModule {}
