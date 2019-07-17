import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../../core/service/dashboard/dashboard.service';
import * as Data from './../../../../db.json';
@Component({
  selector: 'info-common',
  templateUrl: './info-common.component.html',
  styleUrls: ['./info-common.component.scss']
})
export class InfoCommonComponent implements OnInit {

  public arrDataChart ;

  constructor(
    private infoCommonChart : DashboardService
  ) { }

  ngOnInit() {

    this.arrDataChart = this.infoCommonChart.getData(Data.infoCommonDashboard)
  }

}
