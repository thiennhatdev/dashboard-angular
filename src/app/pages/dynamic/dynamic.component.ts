import { Component, OnInit } from '@angular/core';


// import redux
import {NgRedux} from 'ng2-redux';
import {IAppState} from './../../store';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  @select() objMenuCreated: Observable<object>;
  constructor(
    private ngRedux : NgRedux<IAppState>
  ) { }

  ngOnInit() {
  }
  createItemMenu(e,title : string,icon : number,link : string,menuParent : number) {
    e.preventDefault();
    this.ngRedux.dispatch({ type : "CREATE_MENU" , info  : { title,icon,link}})
    // console.log(title,icon,link,menuParent)
  }
}
