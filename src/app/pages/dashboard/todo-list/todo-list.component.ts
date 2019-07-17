import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../../core/service/dashboard/dashboard.service';
import * as Data from './../../../../db.json';
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public arrTasks : Array<object> = [] ;
  public showInput : boolean = false;
  constructor(
    public arrTask  :DashboardService
  ) { 
    
  }

  ngOnInit() {
    this.arrTasks = this.arrTask.getData(Data.tasks);
  }
  changeStatus(name) {
    let item  = this.arrTask.selectStatusTask(Data.tasks,name);
    item[0].status = !item[0].status;
  }
  removeTask(item) {
    this.arrTasks = this.arrTask.removeData(Data.tasks,item) 
  }
  
}
