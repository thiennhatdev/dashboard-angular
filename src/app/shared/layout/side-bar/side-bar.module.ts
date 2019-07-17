import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// service
import { MenuService } from '../../../core/service/menu.service';
import { SideBarComponent } from './side-bar.component';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';

@NgModule({
  declarations: [
    SideBarComponent,
    ItemMenuComponent,
  ],
  imports: [
    CommonModule ,
    RouterModule
  ],
  providers : [
    MenuService
  ],
  exports : [
    CommonModule,
    SideBarComponent
    // RouterModule
  ]
})
export class SideBarModule { }
