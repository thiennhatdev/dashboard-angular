import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../core/service/dashboard/dashboard.service';
import * as Data from './../../../db.json';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public taskItem : string;
  public objTask : object = {};
  constructor(
   public addItemTask : DashboardService
  ) { }

  ngOnInit() {


  }
  addTask() {
    this.objTask = {
      status : true,
      name : this.taskItem
    }
    this.addItemTask.addData(Data.tasks,this.objTask);
  }
  closeChart(e) {
    let event = e.currentTarget.parentElement.parentElement.parentElement;
    event.style.display = 'none';
  }
}
