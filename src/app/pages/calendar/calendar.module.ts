import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { NgCalendarModule } from 'ionic2-calendar';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { CalModalPageModule } from '../cal-modal/cal-modal.module';
registerLocaleData(localeEs);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
  ],
  declarations: [CalendarPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ]
})
export class CalendarPageModule {}
