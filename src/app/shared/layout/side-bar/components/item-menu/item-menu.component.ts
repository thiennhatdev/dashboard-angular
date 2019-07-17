import { Input, Component, OnInit } from '@angular/core';
@Component({
  selector: 'item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent implements OnInit {

  @Input('icon') icon : string ; 
  @Input('name') name : string ; 
  @Input('link') link : string ; 
  constructor() { }

  ngOnInit() {
  }

}
