    import { Component, OnInit, Input, OnChanges } from '@angular/core';
    import {  MemberService } from './../../../core/service/member/member.service';
    import { Member } from './../../../core/models/member.model';
    @Component({
    selector: 'one-member',
    templateUrl: './one-member.component.html',
    styleUrls: ['./one-member.component.scss']
    })
    export class OneMemberComponent implements OnInit, OnChanges {

    @Input('valueInput') valueInput1 : string ;
    @Input('styleShow') styleShowMember : boolean;
    public arrMemberNew  : [] = JSON.parse(sessionStorage.getItem('arrMember'))
    public arrMember : Array<Member> = [];
    constructor(
        public memberService : MemberService,
        
        ) { 
        
    }
    // khi mà get đươc data rồi nhưng không biết làm sao phải gắn data đó và cái gì

    ngOnInit() {
        this.memberService.getUser().subscribe((data) => {
            // this.arrMember = data[0].dashboard.user;
            sessionStorage.setItem('arrMember',JSON.stringify(data[0].dashboard.user))
        })
        
    }
    ngOnChanges() {
        
        this.arrMember = this.arrMember.filter((val) => {
            return val.name.includes(this.valueInput1);
        })
    }
    
}
