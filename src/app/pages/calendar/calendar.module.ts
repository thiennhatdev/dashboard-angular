import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { routesCalendar } from './calendar.routes';
@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesCalendar)
  ]
})
export class CalendarModule { }
