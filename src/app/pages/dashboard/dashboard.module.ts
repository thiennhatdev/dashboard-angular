import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { routesDashboard } from './dashboard.routes';
import { InfoCommonComponent } from './info-common/info-common.component';
import { ChartCommonComponent } from './chart-common/chart-common.component';
import { ChartVisitorComponent } from './chart-visitor/chart-visitor.component';
import { RealtimeCostComponent } from './realtime-cost/realtime-cost.component';
import { DiskSpaceComponent } from './disk-space/disk-space.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
// service
import { DashboardService } from './../../core/service/dashboard/dashboard.service';
@NgModule({
  declarations: [DashboardComponent, InfoCommonComponent, ChartCommonComponent, ChartVisitorComponent, RealtimeCostComponent, DiskSpaceComponent, TodoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routesDashboard)
    
  ],
  providers : [
    DashboardService
  ]
})
export class DashboardModule { }
