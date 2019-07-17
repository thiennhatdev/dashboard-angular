import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartComponent } from './chart.component';
import { routesChart } from './chart.routes';
@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesChart)
  ]
})
export class ChartModule { }
