import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAsigPageRoutingModule } from './add-asig-routing.module';

import { AddAsigPage } from './add-asig.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAsigPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [AddAsigPage]
})
export class AddAsigPageModule {}
