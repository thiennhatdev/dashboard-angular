import { Component, OnInit, OnChanges  } from '@angular/core';
import { MenuService } from './../../../core/service/menu.service';
import * as Data from './../../../../db.json';
import { Store } from '@ngrx/store';
import { ItemMenu } from './side-bar.class';
import { Observable } from 'rxjs';
import { rootReducer, IAppState } from './../../../store';
@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnChanges {

  public data : Array<ItemMenu> = Data.menu;
  public itemMenuCreated;
  constructor(
    // private store: Store<any>,
    public menuService : MenuService
  ) { 
    // this.itemMenuCreated = store.select('rootReducer').subscribe((rootReducer) =>  {return rootReducer})
  }

  ngOnInit() {
  }
  ngOnChanges() {
  }

}
