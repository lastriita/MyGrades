import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsigDetailPageRoutingModule } from './asig-detail-routing.module';

import { AsigDetailPage } from './asig-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalPage } from '../modal/modal.page';
import { ModalPageModule } from '../modal/modal.module';

@NgModule({
  entryComponents:[
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AsigDetailPageRoutingModule,
    ComponentsModule,
    ModalPageModule
  ],
  declarations: [AsigDetailPage]
})
export class AsigDetailPageModule {}
