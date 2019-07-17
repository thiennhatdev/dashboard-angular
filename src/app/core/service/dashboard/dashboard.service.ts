import { Injectable } from '@angular/core';
import  * as Data from './../../../../../src/db.json'; 
import { InfoChart } from './../../models/infoChart.model';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public data : InfoChart[]  ;

  constructor() { }

  getData(data) {
    this.data = data;
    return this.data;
  }
  addData(data,item) {
    data.push(item);
    return this.data;
  }
  removeData(data,item) {
    let arrTaskRest = data.filter((val) => {
      return val.name !== item;
    })
    return arrTaskRest;
  }
  selectStatusTask(data,name) {
    let item = data.filter((val) => {
      return val.name === name;
    })
    return item;
  }

}
