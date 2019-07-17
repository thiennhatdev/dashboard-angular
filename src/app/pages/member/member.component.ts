import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit, OnChanges {

  public searchUser : string  ;
  public statusShowList : boolean = true;
  constructor(
    
  ) { }

  ngOnInit() {
  }
  ngOnChanges() {
    // console.log(this.searchUser)
  }
  changeInputSearchUser(e) {
    this.searchUser = e;
    
  }

  changeShowList() {
    this.statusShowList = false;
  }
  changeShowGrid() {
    this.statusShowList = true;
  }
  

}
