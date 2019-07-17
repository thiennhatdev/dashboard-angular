import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component';
import { RouterModule } from '@angular/router';
import { memberRoutes } from './member.routes';
import { FormsModule } from '@angular/forms';
import { PathModule } from './../../shared/components/path/path.module';
import { OneMemberComponent } from './one-member/one-member.component';
import { AddUserComponent } from './add-user/add-user.component';
@NgModule({
  declarations: [
    MemberComponent,
    OneMemberComponent,
    AddUserComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PathModule,
    RouterModule.forChild(memberRoutes)
  ]
})
export class MemberModule { }
