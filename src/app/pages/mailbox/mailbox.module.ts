import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailboxComponent } from './mailbox.component';
import { RouterModule } from '@angular/router';
import { mailboxRoutes } from './mailbox.routes';
@NgModule({
  declarations: [
    MailboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mailboxRoutes)
  ]
})
export class MailboxModule { }
